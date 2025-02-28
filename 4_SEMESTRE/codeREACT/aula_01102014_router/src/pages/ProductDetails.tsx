import '../App.css'
import { useLoaderData } from 'react-router-dom';


// Interface para o tipo de produto, caso ainda não exista
type TProduct = {
    id: number;
    name: string;
    description: string;
    price: number;
}

type TProducts = TProduct[]

const products: TProducts = [
    { id: 1, name: 'Produto A', description: 'Descrição do Produto A', price: 100 },
    { id: 2, name: 'Produto B', description: 'Descrição do Produto B', price: 200 },
    { id: 3, name: 'Produto C', description: 'Descrição do Produto C', price: 300 },
];


// Define a interface para os parâmetros esperados.
// Aqui, o parâmetro 'id' é uma string, pois normalmente os valores vindos da URL são do tipo string.
interface IParams {
    id: string;
  }
  
  // Suponha que TProduct seja uma interface ou tipo definido em outro lugar que representa um produto.
  // Exemplo (definição fictícia):
  // interface TProduct {
  //   id: number;
  //   name: string;
  //   price: number;
  // }
  
  // Função loader com tipagem para os parâmetros e retorno
  // Essa função recebe um objeto que possui uma propriedade 'params' do tipo IParams.
  // Ela procura um produto no array 'products' cujo id (convertido para número) corresponda ao parâmetro 'id' recebido.
  // Se o produto não for encontrado, lança um erro; caso contrário, retorna o produto encontrado.
  export function loader({ params }: { params: IParams }): TProduct {
    // Procura o produto no array 'products'. Note que é feita a conversão de params.id (string) para number,
    // pois o id do produto provavelmente é um número.
    const product = products.find((p) => p.id === Number(params.id));
    if (!product) {
      // Se nenhum produto for encontrado, lança um erro informando que o produto não foi encontrado.
      throw new Error('Produto não encontrado!');
    }
    // Retorna o produto encontrado, que tem o tipo TProduct.
    return product;
  }
function ProductDetails() {
    const product = useLoaderData();
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
        </div>
    );
}
export default ProductDetails;