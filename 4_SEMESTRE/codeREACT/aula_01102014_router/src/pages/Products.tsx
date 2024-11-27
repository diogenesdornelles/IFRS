import '../App.css'
import { Link } from "react-router-dom";


const productList = [
    { id: 1, name: "Produto A" },
    { id: 2, name: "Produto B" },
    { id: 3, name: "Produto C" },
];
function ProductList() {
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul
                style={{
                    listStyleType: "none",
                    padding: 0,
                }}>
                {productList.map((product) => (
                    <li key={product.id} style={{ margin: "10px 0" }}><Link
                        to={`/products/${product.id}`}
                        style={{
                            textDecoration: "none",
                            color: "#007BFF",
                        }}>
                        {product.name}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;