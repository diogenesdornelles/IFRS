import { useEffect } from "react";
import axios from "axios";

type TUser = {
    id: string,
    first_name: string,
    last_name: string
}

function MyGet() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://reqres.in/api/users");
                // Itera sobre os dados da resposta e registra as informações de cadausuário no console
                response.data.data.forEach((user: TUser) => {
                    console.log(
                        `ID: ${user.id} - Nome: ${user.first_name} ${user.last_name}`
                    );
                });
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };
        fetchData();
    }, []);
    return <p>Teste com API Axios</p>;
}
export default MyGet;
