import { useForm } from "react-hook-form";
import api from "../api/api";

function Login() {
    const {handleSubmit, register, formState: {errors}} = useForm()

    async function login(dados) {
        const response = await api.post('/auth/login', dados)
        if(response.status == 200){
            const token = response.data.token
            localStorage.setItem('token', token)
            window.location.href = '/'
        } 
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            <input {...register('email', {required:true})} type="text" placeholder="Digite seu Email"/>
            <input {...register('senha', {required:true})} type="password" placeholder="Digite sua Senha"/>
            <button type="submit">Entrar</button>
        </form>
      );
}

export default Login;