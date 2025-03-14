import './CustomerList.css'
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { TCustomerData } from '../App';

function CustomerList() {
    const customers = useLoaderData<TCustomerData[]>(); // Carrega a lista de clientes do loader
    return (
        <div className="container">
            <h1>Lista de Clientes</h1>
            <ul className="customer-list">
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {/* Link para a página de detalhes do cliente */}
                        <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Renderiza os detalhes do cliente na mesma página */}
            <Outlet />
        </div>
    );
}
export default CustomerList;
