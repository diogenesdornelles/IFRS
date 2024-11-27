import LinhasTabelaCarro from "./linhaTabelaCarro"


const TabelaCarros = (marca: string): JSX.Element => {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">Marca</th>
                    <th scope="col" className="px-6 py-3">Modelo</th>
                    <th scope="col" className="px-6 py-3">Ano</th>
                    <th scope="col" className="px-6 py-3">Preço</th>
                </tr>
            </thead>
            <tbody>
                {

                    LinhasTabelaCarro(marca)
                }
            </tbody>
        </table>
    )
}

export default TabelaCarros