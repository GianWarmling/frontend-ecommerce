// src/pages/ProdutoList.jsx
import { useEffect, useState } from "react";
import { listarProdutos, deletarProduto } from "../api/produtos";
import { useNavigate } from "react-router-dom";
import ProdutoItem from "../components/ProdutoItem";
import { Plus } from "lucide-react";
import HeaderPage from "../components/HeaderPage";

function ProdutoList() {
    const [produtos, setProdutos] = useState([])
    const navigate = useNavigate()

    async function carregar() {
        const dados = await listarProdutos()
        setProdutos(dados)
    }

    useEffect(() => {
        carregar()
    }, [])

    async function excluir(id) {
        await deletarProduto(id)
        carregar()
    }

    return (
        <div className="mx-3 mt-4">
            <HeaderPage titulo="Produtos" subTitulo="Gerencie o catálogo da sua loja" textoBotao="Novo Produto" urlAcao="/produtos/novo"/>

            <div className="grid gap-4">
                {!!produtos && produtos.map(produto => (
                    <ProdutoItem
                        
                        key={produto.id}
                        produto={produto}
                        onEditar={() => navigate(`/produtos/editar/${produto.id}`)}
                        onExcluir={() => excluir(produto.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProdutoList
