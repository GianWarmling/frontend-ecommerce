// src/pages/ProdutoList.jsx
import { useEffect, useState } from "react";
import { listarProdutos, deletarProduto } from "../api/produtos";
import { useNavigate } from "react-router-dom";
import ProdutoItem from "../components/ProdutoItem";

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
        <div>
            <h1>Produtos</h1>

            <button onClick={() => navigate("/produtos/novo")}>
                Novo Produto
            </button>

            {produtos.map(produto => (
                <ProdutoItem
                    key={produto.id}
                    produto={produto}
                    onEditar={() => navigate(`/produtos/editar/${produto.id}`)}
                    onExcluir={() => excluir(produto.id)}
                />
            ))}
        </div>
    )
}

export default ProdutoList
