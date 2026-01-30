// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdutoCreate from "./pages/ProdutoCreate";
import ProdutoEdit from "./pages/ProdutoEdit";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Home />} />
                <Route path="/produtos/novo" element={<ProdutoCreate />} />
                <Route path="/produtos/editar/:id" element={<ProdutoEdit />} />
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App