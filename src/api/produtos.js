import api from "./api";

export const listarProdutos = async () => {
    const res = await api.get("/Produtos")
    return res.data.dados
}

export const criarProduto = async (produto) => {
    const res = await api.post("/Produtos", produto)
    return res.data
}

export const atualizarProduto = async (id, produto) => {
    const res = await api.put(`/Produtos/${id}`, produto)
    return res.data
}

export const deletarProduto = async (id) => {
    const res = await api.delete(`/Produtos/${id}`)
    return res.data
}
