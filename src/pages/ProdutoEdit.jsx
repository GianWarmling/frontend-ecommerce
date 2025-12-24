import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProdutoForm from "../components/ProdutoForm";
import { listarProdutos, atualizarProduto } from "../api/produtos";

function ProdutoEdit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [produto, setProduto] = useState(null)

    useEffect(() => {
        async function carregar() {
            const produtos = await listarProdutos()
            const p = produtos.find(x => x.id === Number(id))
            setProduto(p)
        }
        carregar()
    }, [id])

    async function handleSubmit(form) {
        await atualizarProduto(id, form)
        navigate("/produtos")
    }

    if (!produto) return <p>Carregando...</p>

    return (
        <div>
            <h1>Editar Produto</h1>
            <ProdutoForm produto={produto} onSubmit={handleSubmit} />
        </div>
    )
}

export default ProdutoEdit
