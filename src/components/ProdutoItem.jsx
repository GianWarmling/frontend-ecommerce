// src/components/ProdutoItem.jsx
function ProdutoItem({ produto, onEditar, onExcluir }) {
    return (
        <div style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
            <p><strong>{produto.nome}</strong></p>
            <p>{produto.descricao}</p>
            <p>R$ {produto.preco}</p>

            <button onClick={onEditar}>Editar</button>
            <button onClick={onExcluir}>Excluir</button>
        </div>
    )
}

export default ProdutoItem
