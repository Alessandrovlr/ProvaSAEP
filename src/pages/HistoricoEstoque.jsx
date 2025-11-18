export const HistoricoEstoque = () => {
    return(
        <div className="flex flex-col gap-10 items-center ">
            <h1 >historico do estoque</h1>
            <table className="table-auto border-collapse border border-gray-400 w-11/12">
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Quantidade</th>
                        <th>Data de Entrada</th>
                        <th>Data de Saída</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>Produto 1</td>
                        <td>10</td>
                        <td>01/01/2024</td>
                        <td>05/01/2024</td>
                    </tr>
                    <tr>
                        <td>Produto 2</td>
                        <td>5</td>
                        <td>02/01/2024</td>
                        <td>06/01/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}