import carros from "./carros";

const LinhasTabelaCarro = (marca: string): (JSX.Element[] | undefined)[] => {
    //Percorre toda a listagem de carros
    const linhas = carros.map((carro) => {
        //Define uma linha em branco
        const linha = [];
        //Caso o carro seja da marca selecionada ou não tenha um filtro de marca
        const marca_props = carro.marca;
        if (typeof marca_props === 'string') {
            if (marca_props.toUpperCase().includes(marca.toUpperCase()) || marca === "") {
                //Adicionar este carro no retorno
                linha.push(
                    <tr key={`${carro.marca}-${carro.modelo}`} className="bg-white border-b">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{carro.marca}</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{carro.modelo}</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowra">{carro.ano}</td><td>
                            {carro.preco.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </td>
                    </tr>
                )
            }
            return linha
        }
    })
    return linhas
}

export default LinhasTabelaCarro
