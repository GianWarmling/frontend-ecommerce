// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdutoCreate from "./pages/ProdutoCreate";
import ProdutoEdit from "./pages/ProdutoEdit";
import Login from "./pages/Login";
import ClienteCreate from "./pages/ClienteCreate";
import ClienteList from "./pages/ClienteList";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import PedidoCreate from "./pages/PedidoCreate";
import PedidoList from "./pages/PedidoList";
import MainLayuot from "./components/MainLayout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<MainLayuot />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/produtos" element={<Home />} />
                        <Route path="/produtos/novo" element={<ProdutoCreate />} />
                        <Route path="/produtos/editar/:id" element={<ProdutoEdit />} />
                        <Route path="/cliente/novo" element={<ClienteCreate />} />
                        <Route path="/cliente" element={<ClienteList />} />
                        <Route path="/pedido" element={<PedidoList />} />
                        <Route path="/pedido/novo" element={<PedidoCreate />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App