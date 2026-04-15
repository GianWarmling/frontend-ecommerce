import { Package, Pencil, Trash2 } from "lucide-react"

function ProdutoItem({ produto, onEditar, onExcluir }) {
    return (
        <div className="border border-gray-200 rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Package className="text-gray-500" />
                </div>
                <div>
                    <h3 className="font-display font-semibold text-lg">{produto?.nome}</h3>
                    <span className="text-sm text-gray-500">{produto?.descricao}</span>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span>Quantidade: {produto.quantidade}</span>
                <span className="font-display font-bold text-xl">R$ {(produto.quantidade > 0 ? produto.quantidade * produto.preco : produto.preco).toFixed(2).replace(".", ",")}</span>

                <div className="flex gap-2">
                    {
                        !!onEditar &&
                    <button className="flex gap-2 border border-gray-200 rounded-lg p-2 items-center cursor-pointer" onClick={()=>onEditar()}><Pencil className="h-4 w-4" />Editar</button>
                    }
                    {
                        !!onExcluir &&  
                        <button className="flex gap-2 border border-gray-200 rounded-lg p-2 items-center text-red-500 cursor-pointer" onClick={()=>onExcluir()}><Trash2 className="h-4 w-4" />Excluir</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default ProdutoItem
