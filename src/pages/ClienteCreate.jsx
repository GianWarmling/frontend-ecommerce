import { Link, useNavigate } from "react-router-dom";
import { createCliente } from "../api/clientes";
import ClienteForm from "../components/ClienteForm";
import { ArrowLeftIcon, Backpack, SendToBack, SkipBack } from "lucide-react";

function ClienteCreate() {
    const navigate = useNavigate()
    async function cadastrarCliente(dados) {
        try {
            const response = await createCliente(dados)
            if (response) {
                navigate('/cliente')
            }
        }
        catch {

        }
    }
    return (
        <div className="m-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Novo Cliente</h2>
                    <p className="text-gray-400 text-sm mt-2 mb-3">Preencha as informações do cliente</p>
                </div>
                <Link className="flex gap-1 items-center text-orange-500 border border-orange-500 p-2 rounded-md hover:bg-orange-200" to='/cliente'><ArrowLeftIcon className="w-3 h-3"/>Voltar</Link>
            </div>
            <div className="flex items-center">
                <ClienteForm enviar={cadastrarCliente} />
            </div>
        </div>
    );
}

export default ClienteCreate;