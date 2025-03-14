import mysql from "mysql2/promise";

interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

const dbConfig: DBConfig = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "exemplo_db",
  port: 3306, // Se estiver rodando via Docker
};

// Criar pool de conexões
const pool = mysql.createPool(dbConfig);

export default pool;