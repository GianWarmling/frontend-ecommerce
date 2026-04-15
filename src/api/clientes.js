import { toast } from "react-toastify";
import api from "./api";

export async function createCliente(dados) {
    try {
        const response = await api.post('/clientes', dados)
        console.log(response)
        if (response?.status == 200) {
            toast('Cliente cadastrado com sucesso!', { type: "success" })
            return response.data
        }
        else if(response.status == 400){
            toast(response.response.data.mensagem, {type: "error"})
        }
    } catch (error) {
        console.log(error.message)
        toast('Erro ao cadastrar cliente! ' + error.message, { type: "error" })
    }
}

export async function readCliente() {
    const response = await api.get('/clientes')
    return response.data
}

export async function putCliente(dados, id) {
    const response = await api.put('/clientes/' + id, dados)
    return response.data
}

export async function deleteCliente(id) {
    const response = await api.delete('/clientes/' + id)
    return response.data
}