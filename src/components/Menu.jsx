import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogOut, Package, ShoppingCart, User } from "lucide-react";

function Menu() {

    function Logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("clienteId")
        window.location.reload()
    }

    const perfil = localStorage.getItem('perfil')
    const [isLogin, setLogin] = useState(false)
    useEffect(() => {
        if (window.location.href.includes("login")) {
            setLogin(true)
        }
    }, [])

    return (
        <aside className="w-64 bg-gray-900 text-orange-500 flex flex-col fixed h-full">
            <div className="p-6">
                <h1 className="text-xl font-bold text-white tracking-tight">
                    Minha Loja
                </h1>
                <p className="text-xs text-gray-50 mt-1">
                    Painel Administrativo
                </p>
            </div>

            {perfil == "CLIENTE" && !isLogin && (
                <nav className="flex flex-col flex-1 px-3 space-y-1 text-gray-50 ml-3">
                    <Link className="flex gap-2 py-3" to="/pedido"><ShoppingCart />Pedidos</Link>
                </nav>
            )}
            {perfil == "ADMIN" && !isLogin && (
                <nav className="flex flex-col flex-1 px-3 space-y-1 text-gray-50 ml-3">
                    <Link className="flex gap-2 py-3" to="/produtos"><Package />Produtos</Link>
                    <Link className="flex gap-2 py-3" to="/cliente"><User />Clientes</Link>
                    <Link className="flex gap-2 py-3" to="/pedido"><ShoppingCart />Pedidos</Link>
                </nav>
            )}
            <div className="px-3 text-gray-50 border-t border-gray-700">
                <button className="ml-3 text-left flex gap-2 py-3 cursor-pointer" onClick={() => Logout()}><LogOut />Sair</button>
            </div>
        </aside>
    );
}

export default Menu;