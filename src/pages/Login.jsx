import { useForm } from "react-hook-form";
import api from "../api/api";
import { toast } from "react-toastify";
import { ShoppingBag } from "lucide-react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";

function Login() {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)

    async function login(dados) {
        try {
            setLoading(true)
            const response = await api.post('/auth/login', dados)
            if (response.status == 200) {
                const clienteId = response.data.clienteId
                localStorage.setItem('clienteId', clienteId)
                const token = response.data.token
                localStorage.setItem('token', token)
                const perfil = response.data.perfil
                localStorage.setItem('perfil', perfil)
                if (perfil == "CLIENTE") {
                    window.location.href = '/pedido'
                }
                else {
                    window.location.href = '/'
                }
                toast('Seja Bem Vindo!', { type: "success" })
            }
        }
        catch {
            toast('Email ou Senha Inválidos!', { type: "error" })
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <>
            <LoadingOverlay isLoading={loading}></LoadingOverlay>
            <div className="flex min-h-screen ">
                <div className="hidden lg:flex lg:w-1/2 bg-gray-900 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-orange-500 blur-3xl" />
                        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-indigo-600 blur-3xl" />
                    </div>
                    <div className="relative z-10 text-center px-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-500 mb-8">
                            <ShoppingBag className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl font-display font-bold text-white mb-4">
                            Minha Loja
                        </h1>
                        <p className="text-slate-500 text-lg max-w-md">
                            Gerencie seus produtos, clientes e pedidos em um único lugar.
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="w-75 space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl text-gray-900 font-bold">Seja Bem Vindo De Volta!</h2>
                            <p className="text-gray-500">Entre com suas credenciais para acessar o painel</p>
                        </div>
                        <form className="space-y-5" onSubmit={handleSubmit(login)}>
                            <div className="space-y-2">
                                <input className="p-4 border-gray-300 border-1 rounded-md w-full" {...register('email', { required: true })} type="text" placeholder="Digite seu Email" />
                            </div>
                            <div className="space-y-2">
                                <input className="p-4 border-gray-300 border-1 rounded-md w-full" {...register('senha', { required: true })} type="password" placeholder="Digite sua Senha" />
                            </div>
                            <button className="p-2 w-full bg-orange-500 text-white rounded-md hover:bg-orange-200 font-semibold" type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;