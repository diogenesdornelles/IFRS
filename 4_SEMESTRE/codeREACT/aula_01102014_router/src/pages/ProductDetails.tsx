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


interface IParams {
    id: string;  // id é geralmente uma string, vinda da URL
};


// Tipagem da função loader
export function loader({ params }: { params: IParams }): TProduct {
    const product = products.find((p) => p.id === Number(params.id));
    if (!product) {
        throw new Error('Produto não encontrado!');
    }
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