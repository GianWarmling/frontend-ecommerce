// src/pages/ProdutoCreate.jsx
import ProdutoForm from "../components/ProdutoForm";
import { criarProduto } from "../api/produtos";
import { useNavigate } from "react-router-dom";

function ProdutoCreate() {
    const navigate = useNavigate()

    async function handleSubmit(form) {
        await criarProduto(form)
        navigate("/produtos")
    }

    return (
        <div>
            <h1>Novo Produto</h1>
            <ProdutoForm onSubmit={handleSubmit} />
        </div>
    )
}

export default ProdutoCreate
