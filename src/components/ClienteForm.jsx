import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";

function ClienteForm(props) {
    const forms = useForm()

    return (
        <form className="grid grid-cols-3 w-full gap-2" onSubmit={forms.handleSubmit(props.enviar)}>
            <input className="p-2 border border-gray-200 rounded-md" label='Email' type="text" {...forms.register('email')} placeholder="Email" />
            <input className="p-2 border border-gray-200 rounded-md" label='Nome' type="text" {...forms.register('nome')} placeholder="Nome" />
            <input className="p-2 border border-gray-200 rounded-md" label='Telefone' type="text" {...forms.register('telefone')} placeholder='Telefone' />
            <input className="p-2 border border-gray-200 rounded-md" label='Logradouro' type="text" {...forms.register('logradouro')} placeholder="Logradouro" />
            <input className="p-2 border border-gray-200 rounded-md" label='Numero' type="text" {...forms.register('numero')} placeholder="Número" />
            <input className="p-2 border border-gray-200 rounded-md" label='Bairro' type="text" {...forms.register('bairro')} placeholder="Bairro" />
            <input className="p-2 border border-gray-200 rounded-md" label='Cidade' type="text" {...forms.register('cidade')} placeholder="Cidade" />
            <input className="p-2 border border-gray-200 rounded-md" label='Estado' type="text" {...forms.register('estado')} placeholder="Estado" />
            <input className="p-2 border border-gray-200 rounded-md" label='CEP' type="text" {...forms.register('cep')} placeholder="CEP" />
            <div className="col-span-3 flex items-center justify-end">
                <Button><Plus className="h-3 w-3"/>Cadastrar</Button>
            </div>
        </form>
    );
}

export default ClienteForm;