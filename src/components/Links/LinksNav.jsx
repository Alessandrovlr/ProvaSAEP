import { Link } from "react-router-dom"

export const LinksNav = () => {
    return(
        <div className="gap-10 flex justify-around">
            <Link className="text-amber-400" to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/cadastroProduto"}>Cadastro Produto</Link>
            <Link  to={"/gestaoEstoque"}>gestao estoque</Link>
            <Link to={"/historicoEstoque"}>historico estoque </Link>
        </div>
    )
}