import ProdutoForm from "../components/ProdutoForm";
import { criarProduto } from "../api/produtos";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

function ProdutoCreate() {
    const navigate = useNavigate()

    async function handleSubmit(form) {
        await criarProduto(form)
        navigate("/produtos")
    }

    return (
        <div className="px-4 mt-4 w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Novo Produto</h1>
                    <p className="text-gray-400 text-sm mt-1">Preencha as informações do produto</p>
                </div>
                <Link className="flex gap-1 items-center text-orange-500 border border-orange-500 p-2 rounded-md hover:bg-orange-200" to='/produtos'><ArrowLeftIcon className="w-3 h-3" />Voltar</Link>
            </div>
            <div>
                <ProdutoForm onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default ProdutoCreate
