import { Outlet } from "react-router-dom"
import { LinksNav } from "../Links/LinksNav"

export const Layout = () => {
    return(
        <div>
            <nav>
                <LinksNav></LinksNav>
            </nav>

            <main className="min-h-[80vh] flex justify-center items-center">
                <Outlet></Outlet>
            </main>

            <footer>
                <h1>Fabricante de ferramentas cop 2025</h1>
            </footer>
        </div>


    )
}