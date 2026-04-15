import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

function HeaderPage({titulo, subTitulo, textoBotao, urlAcao, perfilBotao}) {

    const perfil = localStorage.getItem("perfil")

    return ( 
        <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">{titulo}</h2>
                    <p className="text-gray-500 text-sm mt-1">{subTitulo}</p>
                </div>
                {
                    (!perfilBotao || perfil == perfilBotao) &&
                    <Link className="bg-orange-500 text-white font-semibold gap-2 p-2 flex rounded-md items-center hover:bg-orange-300" to={urlAcao}><Plus className="w-4 h-4" />{textoBotao}</Link>
                }
            </div>
     );
}

export default HeaderPage;