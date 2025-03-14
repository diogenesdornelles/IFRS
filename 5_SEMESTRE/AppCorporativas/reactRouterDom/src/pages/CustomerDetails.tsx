import './CustomerDetails.css'
import { useLoaderData, Link } from "react-router-dom";


function CustomerDetails() {
    const customer = useLoaderData(); // Dados do cliente carregados pelo loader
    return (
        <div className="customer-details">
            <h2>Detalhes do Cliente</h2>
            <p><strong>Nome:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Telefone:</strong> {customer.phone}</p>
            <p><strong>Endereço:</strong> {customer.address}</p>
            {/* Link para voltar à lista de clientes */}
            <Link to="/customers" className="back-link">← Voltar à lista de
                clientes</Link>
        </div>
    );
}
export default CustomerDetails;
