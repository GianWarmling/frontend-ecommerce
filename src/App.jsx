// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdutoCreate from "./pages/ProdutoCreate";
import ProdutoEdit from "./pages/ProdutoEdit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Home />} />
                <Route path="/produtos/novo" element={<ProdutoCreate />} />
                <Route path="/produtos/editar/:id" element={<ProdutoEdit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App