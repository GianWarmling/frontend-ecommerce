import React, { useEffect, useState } from "react";
import { listarProdutos, deletarProduto } from "../api/produtos";

const ProdutoList = ({ reload, onEdit }) => {
    const [produtos, setProdutos] = useState([]);

    const carregarProdutos = async () => {
        const dados = await listarProdutos();
        setProdutos(dados);
    };

    useEffect(() => {
        carregarProdutos();
    }, [reload]);

    const handleDelete = async (id) => {
        if (!window.confirm("Deseja excluir este produto?")) return;
        await deletarProduto(id);
        await carregarProdutos();
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>

            {produtos.map(produto => (
                <div key={produto.id} style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
                    <p><strong>{produto.nome}</strong></p>
                    <p>{produto.descricao}</p>
                    <p>R$ {produto.preco}</p>

                    <button onClick={() => onEdit(produto)}>Editar</button>
                    <button onClick={() => handleDelete(produto.id)}>Excluir</button>
                </div>
            ))}
        </div>
    );
};

export default ProdutoList;
