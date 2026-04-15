import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

function ProdutoForm({ produto, onSubmit, textoBotao = "Salvar" }) {
    const [form, setForm] = useState({
        nome: "",
        descricao: "",
        preco: "",
        estoque: ""
    })

    useEffect(() => {
        if (produto) {
            setForm({
                nome: produto.nome ?? "",
                descricao: produto.descricao ?? "",
                preco: produto.preco ?? "",
                estoque: produto.estoque ?? ""
            })
        }
    }, [produto])

    function handleChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!onSubmit) return
        onSubmit(form)
    }

    return (
        <form className="mt-4 grid grid-cols-3 gap-2 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label>Nome do produto</label>
                <input className="p-2 border border-gray-300 rounded-md" type="text" name="nome" value={form.nome} onChange={handleChange} required />
            </div>

            <div className="flex flex-col">
                <label>Descrição</label>
                <input className="p-2 border border-gray-300 rounded-md" type="text" name="descricao" value={form.descricao} onChange={handleChange} required />
            </div>

            <div className="flex flex-col">
                <label>Preço</label>
                <input className="p-2 border border-gray-300 rounded-md" type="number" name="preco" value={form.preco} onChange={handleChange} step="0.01" required />
            </div>

            <div className="flex flex-col">
                <label>Estoque</label>
                <input className="p-2 border border-gray-300 rounded-md" type="number" name="estoque" value={form.estoque} onChange={handleChange} required />
            </div>

            <div className="col-span-3 flex items-center justify-end">
                <Button><Plus className="h-3 w-3"/>{textoBotao}</Button>
            </div>
        </form>
    )
}

export default ProdutoForm;
