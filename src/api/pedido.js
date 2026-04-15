import api from "./api";

export const listarPedidos = async () => {
    const res = await api.get("/Pedido")
    return res.data
}

export const criarPedido = async (pedido) => {
    const res = await api.post("/Pedido", pedido)
    return res
}

export const atualizarPedido = async (id, pedido) => {
    const res = await api.put(`/Pedido/${id}`, pedido)
    return res.data
}

export const deletarPedido = async (id) => {
    const res = await api.delete(`/Pedido/${id}`)
    return res.data
}
