import { useEffect, useState } from "react";

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
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <div>
                <label>Nome do produto</label>
                <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
            </div>

            <div>
                <label>Descrição</label>
                <input type="text" name="descricao" value={form.descricao} onChange={handleChange} required />
            </div>

            <div>
                <label>Preço</label>
                <input type="number" name="preco" value={form.preco} onChange={handleChange} step="0.01" required />
            </div>

            <div>
                <label>Estoque</label>
                <input type="number" name="estoque" value={form.estoque} onChange={handleChange} required />
            </div>

            <button type="submit">{textoBotao}</button>
        </form>
    )
}

export default ProdutoForm;
