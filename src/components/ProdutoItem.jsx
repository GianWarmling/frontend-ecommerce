import React from "react";
import api from "../api/api";

const ProdutoItem = ({ produto, onDelete }) => {
    const handleDelete = async () => {
        if (window.confirm("Deseja realmente excluir este produto?")) {
            await api.delete(`/Produtos/${produto.id}`);
            onDelete();
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>Categoria: {produto.categoria}</p>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
            <p>Estoque: {produto.estoque}</p>
            <br />
            <button onClick={handleDelete}>Excluir</button>
        </div>
    );
};

export default ProdutoItem;
