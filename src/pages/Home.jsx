import React, { useState } from "react";
import ProdutoForm from "../components/ProdutoForm";
import ProdutoList from "../components/ProdutoList";

const Home = () => {
    const [reload, setReload] = useState(false);
    const [produtoEditando, setProdutoEditando] = useState(null);

    const onSucess = () => {
        setProdutoEditando(null);
        setReload(!reload);
    };

    return (
        <div>
            <ProdutoForm
                produtoEditando={produtoEditando}
                onSucess={onSucess}
            />

            <ProdutoList
                reload={reload}
                onEdit={setProdutoEditando}
            />
        </div>
    );
};

export default Home;