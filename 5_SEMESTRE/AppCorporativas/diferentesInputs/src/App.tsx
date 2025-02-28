import './App.css'

type TState = {
  nome: string,
  email: string,
  senha: string,
  experiencia: string,
  aceitaTermos: boolean,
  genero: string
}

type TErrors = {
  nome?: string,
  email?: string,
  senha?: string,
  experiencia?: string,
  aceitaTermos?: string,
  genero?: string
}


type TNewErrors = {
  nome?: string,
  email?: string,
  senha?: string,
  experiencia?: string,
  aceitaTermos?: string,
  genero?: string
}

import { ChangeEvent, useState } from "react";
function App() {
  // Estado inicial para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState<TState>({
    nome: "",
    email: "",
    senha: "",
    experiencia: "",
    aceitaTermos: false,
    genero: "",
  });

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento de recarregar a página
    // Valida o formulário antes de submeter
    const validationErrors: TNewErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Se não houver erros, exibe os dados
      alert(`
  Nome: ${formData.nome}\n
  Email: ${formData.email}\n
  Senha: ${formData.senha}\n
  Experiência: ${formData.experiencia}\n
  Gênero: ${formData.genero}\n
  Aceita os Termos: ${formData.aceitaTermos ? "Sim" : "Não"}
  `);
      setFormData({
        nome: "",
        email: "",
        senha: "",
        experiencia: "",
        aceitaTermos: false,
        genero: "",
      }); // Limpa o formulário após o envio
    }
  };

  // Função para validar o formulário
  const validateForm = () => {
    const newErrors: TNewErrors = {};
    if (!formData.nome) {
      newErrors.nome = "O campo Nome é obrigatório";
    }
    if (!formData.email) {
      newErrors.email = "O campo Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, insira um email válido";
    }
    if (!formData.senha) {
      newErrors.senha = "O campo Senha é obrigatório";
    } else if (formData.senha.length < 6) {
      newErrors.senha = "A senha deve ter pelo menos 6 caracteres";
    }
    if (!formData.experiencia) {
      newErrors.experiencia = "Por favor, selecione seu nível de experiência";
    }
    if (!formData.genero) {
      newErrors.genero = "Por favor, selecione seu gênero";
    }
    if (!formData.aceitaTermos) {
      newErrors.aceitaTermos = "Você deve aceitar os termos e condições";
    }
    return newErrors;
  };

  // Função para lidar com as mudanças nos inputs
  const handleChange = (event: ChangeEvent) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    // Se o tipo for "checkbox", usamos 'checked' para o valor
    const valor = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: valor, // Atualiza o campo correto no estado
    }));
  };
  // Estado para armazenar os erros
  const [errors, setErrors] = useState<TErrors>({});
  return (
    <div>
      <h2>Formulário Controlado</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome}
            onChange={handleChange} />
          {errors.nome && <p style={{ color: "red" }}>{errors.nome}</p>}
        </div>
        {/* Campo Email */}
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email}
            onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        {/* Campo Senha */}
        <div>
          <label>Senha:</label>
          <input type="password" name="senha" value={formData.senha}
            onChange={handleChange} />
          {errors.senha && <p style={{ color: "red" }}>{errors.senha}</p>}
        </div>
        <div>
          <label>Experiência:</label>
          <select
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
          >
            <option value="">Selecione seu nível de experiência</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.experiencia && (
            <p style={{ color: "red" }}>{errors.experiencia}</p>
          )}
        </div>
        <div>
          <p>Gênero:</p>
          <label>
            <input type="radio" name="genero" value="Masculino"
              checked={formData.genero === "Masculino"} onChange={handleChange}
            />
            Masculino
          </label>
          <label>
            <input type="radio" name="genero" value="Feminino"
              checked={formData.genero === "Feminino"} onChange={handleChange}
            />
            Feminino
          </label>
          <label>
            <input type="radio" name="genero" value="Outro"
              checked={formData.genero === "Outro"} onChange={handleChange}
            />
            Outro
          </label>
          {errors.genero && <p style={{ color: "red" }}>{errors.genero}</p>}
        </div>
        <div>
          <label>
            <input type="checkbox" name="aceitaTermos" checked={formData.aceitaTermos}
              onChange={handleChange} />
            Aceito os termos e condições
          </label>
          {errors.aceitaTermos && (
            <p style={{ color: "red" }}>{errors.aceitaTermos}</p>
          )}
        </div>
        {/* Botão para submeter o formulário */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default App;