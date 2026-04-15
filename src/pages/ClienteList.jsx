import { useEffect, useState } from "react";
import { deleteCliente, readCliente } from "../api/clientes";
import { Trash2, UserCircle } from "lucide-react";
import HeaderPage from "../components/HeaderPage";

function ClienteList() {
    const [clientes, setClientes] = useState([])
    async function getClientes() {
        const result = await readCliente()
        setClientes(result.dados)
    }
    useEffect(() => {
        getClientes()
    }, [])

    async function handleDeletarCliente(id) {
        await deleteCliente(id)
        setClientes(clientes.filter((c) => c.id != id))
    }

    return (
        <div className="mt-4 mx-4">
            <HeaderPage  titulo="Clientes" subTitulo="Listagem de Clientes" textoBotao="Novo Cliente" urlAcao="/cliente/novo" />
            <div className="border border-gray-300 rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-300 bg-gray-200 text-gray-500">
                            <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider">Cliente</th>
                            <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider">Telefone</th>
                            <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(c => (
                            <tr className="hover:bg-gray-100 not-last:border-b not-last:border-gray-300" key={c.id}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center"><UserCircle className="w-5 h-5 text-indigo-700"/></div>
                                        <span className="font-medium text-gray-500">{c.nome}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    <span>{c.telefone}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    <button className="flex gap-2 border border-gray-200 rounded-lg p-2 items-center text-red-500 cursor-pointer hover:bg-red-100" onClick={() => { handleDeletarCliente(c.id) }}><Trash2 className="h-3 w-3"/>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    );
}

export default ClienteList;