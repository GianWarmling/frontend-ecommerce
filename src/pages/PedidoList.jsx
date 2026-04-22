import { useEffect, useState } from "react"
import { listarPedidos, deletarPedido } from "../api/pedido"
import HeaderPage from "../components/HeaderPage"
import { ShoppingBag, Trash2 } from "lucide-react"

function PedidoList() {
    const [pedidos, setPedidos] = useState([])
    const perfil = localStorage.getItem('perfil')

    async function BuscarPedidos() {
        const result = await listarPedidos()
        if (!!result) {
            setPedidos(result)
        }
    }

    useEffect(() => {
        BuscarPedidos()
    }, [])

    async function handleDeletarPedido(id) {
        await deletarPedido(id)
        setPedidos(pedidos.filter((p) => p.id != id))
    }

    return (
        <div className="mt-4 mx-4">
            <HeaderPage perfilBotao="CLIENTE" titulo="Pedidos" subTitulo="Listagem de pedidos" textoBotao="Novo Pedido" urlAcao="/pedido/novo" />

            <div className="grid gap-4">
                {pedidos.map((p) => (
                    <div className="border border-gray-200 rounded-xl hover:shadow-md transition-shadow" key={p.id}>
                        <div className="flex items-center justify-between m-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-200">
                                    <ShoppingBag />
                                </div>
                                <div>
                                    <h3 className="font-semibold font-display text-lg">
                                        Pedido {p.id}
                                    </h3>
                                    <div className="flex gap-4 text-sm text-gray-500">
                                        <span>
                                            Cliente: {p.clienteId}
                                        </span>
                                        <span>
                                            •
                                        </span>
                                        <span>
                                            {p.itens.length} {p.itens.length == 1 ? "item" : "itens"}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {!!p && p.itens.map((i) => (
                                            <span className="bg-gray-200 text-xs font-medium p-1 rounded-md" key={i.produto.produtoId}>
                                                {i.produto.nome}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <button onClick={() => handleDeletarPedido(p.id)} className="flex gap-2 border border-gray-200 rounded-lg p-2 items-center text-red-500 cursor-pointer hover:bg-red-100"><Trash2 className="h-3 w-3" />Deletar</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default PedidoList;