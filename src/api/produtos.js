import api from "./api";

//listar
export const listarProdutos = async () => {
    const res = await api.get('/Produtos')
    return res.data.dados
}

//criar
export const criarProduto = async (produto) => {
    const res = await api.post('/Produtos', produto)
    return res.data
}

//atualizar
export const atualizarProduto = async (id, produto) => {
    const res = await api.put(`/Produtos/${id}`, produto)
    return res.data
}

//deletar
export const deletarProduto = async (id) => {
    const res = await api.delete(`/Produtos/${id}`)
    return res.data
}