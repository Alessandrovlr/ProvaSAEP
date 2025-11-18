import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { Home } from "../pages/Home"
import { LoginPage } from "../pages/loginPage"
import { CadastroProduto } from "../pages/CadastroProduto"
import { GestaoEstoque } from "../pages/GestaoEstoque"
import { HistoricoEstoque } from "../pages/HistoricoEstoque"

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/cadastroProduto" element={<CadastroProduto/>} />
                    <Route path="/GestaoEstoque" element={<GestaoEstoque/>} />
                    <Route path="/HistoricoEstoque" element={<HistoricoEstoque/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}