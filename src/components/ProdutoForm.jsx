import React, { useEffect, useState } from "react";
import { criarProduto, atualizarProduto } from "../api/produtos";

const ProdutoForm = ({ produtoEditando, onSucess }) => {
    const [produto, setProduto] = useState({
        nome: "",
        descricao: "",
        categoria: "",
        preco: "",
        estoque: ""
    });

    useEffect(() => {
        if (produtoEditando) {
            setProduto({
                nome: produtoEditando.nome,
                descricao: produtoEditando.descricao,
                categoria: produtoEditando.categoria,
                preco: produtoEditando.preco,
                estoque: produtoEditando.estoque
            });
        }
    }, [produtoEditando]);

    const handleChange = (e) => {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...produto,
            preco: Number(produto.preco),
            estoque: Number(produto.estoque)
        };

        if (produtoEditando) {
            await atualizarProduto(produtoEditando.id, payload);
        } else {
            await criarProduto(payload);
        }

        setProduto({
            nome: "",
            descricao: "",
            categoria: "",
            preco: "",
            estoque: ""
        });

        onSucess();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{produtoEditando ? "Editar Produto" : "Criar Produto"}</h2>

            <input name="nome" value={produto.nome} onChange={handleChange} placeholder="Nome" />
            <input name="descricao" value={produto.descricao} onChange={handleChange} placeholder="Descrição" />
            <input name="categoria" value={produto.categoria} onChange={handleChange} placeholder="Categoria" />
            <input name="preco" value={produto.preco} onChange={handleChange} placeholder="Preço" />
            <input name="estoque" value={produto.estoque} onChange={handleChange} placeholder="Estoque" />

            <button type="submit">
                {produtoEditando ? "Atualizar" : "Salvar"}
            </button>
        </form>
    );
};

export default ProdutoForm;
