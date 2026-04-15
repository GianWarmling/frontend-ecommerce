import { useEffect, useState } from "react";
import { listarProdutos } from "../api/produtos";
import { useForm } from "react-hook-form";
import { criarPedido } from "../api/pedido";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ShoppingBasket } from "lucide-react";
import Button from "../components/ui/Button";
import ProdutoItem from "../components/ProdutoItem";

function PedidoCreate() {
    const forms = useForm()
    const [produtos, setProdutos] = useState([])
    const [carrinho, setCarrinho] = useState([])
    async function BuscarProdutos() {
        const resultado = await listarProdutos()
        if (!!resultado) {
            setProdutos(resultado)
        }
    }
    useEffect(() => {
        BuscarProdutos()
    }, [])

    function AdicionarItem(item) {
        setCarrinho([...carrinho, item])
        forms.reset()
    }

    function RemoverItem(produtoId){
        alert('aqui')
        let lista = carrinho.filter(p => p.produtoId != produtoId)
        setCarrinho(lista)
    }

    async function AddPedido() {
        let clienteId = localStorage.getItem("clienteId")
        await criarPedido({ clienteId: clienteId, itens: carrinho })
        toast('Pedido criado com sucesso!', { type: "success" })
    }

    function PegarProduto(produtoId) {
        let produto = produtos.find(p => p.id == +produtoId)
        return {...produto, quantidade : carrinho.find(p => p.produtoId == produtoId)?.quantidade}
    }

    return (
        <div className="px-4 mt-4 w-full">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Criar Pedido</h2>
                    <p className="text-sm mt-1 text-gray-400">Preencha as informações do pedido</p>
                </div>
                <Link className="flex gap-1 items-center text-orange-500 border border-orange-500 p-2 rounded-md hover:bg-orange-200" to='/pedido'><ArrowLeftIcon className="w-3 h-3" />Voltar</Link>
            </div>
            <div className="flex justify-center">
                <form className="flex flex-col gap-2 w-8/12 justify-center" onSubmit={forms.handleSubmit(AdicionarItem)}>
                    <div className="flex flex-col">
                        <label id='select-produto'>Produtos</label>
                        <select className="p-2 border border-gray-200 rounded-md" id="select-produto" {...forms.register('produtoId')}>
                            {produtos.map(p => (
                                <option value={p.id} key={p.id}>{p.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input className="p-2 border border-gray-200 rounded-md" type="number" {...forms.register('quantidade')} />
                    </div>
                    <div className="flex justify-end mt-2">
                        <Button><ShoppingBasket className="w-3 h-3" /> Adicionar ao Carrinho</Button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col justify-center w-full mb-4">
                <h2 className="text-md my-3">Carrinho de Compras</h2>
                {carrinho.map((i) => (
                        <ProdutoItem onExcluir={()=>RemoverItem(i.produtoId)} produto={PegarProduto(i.produtoId)} key={i.produtoId}></ProdutoItem>
                ))}
            </div>

            <Button type="button" onClick={() => AddPedido()}>Criar Pedido</Button>
        </div>
    );
}

export default PedidoCreate;