import { useState } from "react";
import { Container, Title, List, Item, Input, InputContainer, InputAreaContainer, Label } from "../styles/CalculadoraIMC";
import Toast from "./Toast";

type TInput = {
  peso: number;
  altura: number;
  imc: number;
  status: "Abaixo do peso" | "Peso normal" | "Sobrepeso" | "Obesidade" | "";
};

type TError = {
  type: 'peso' | 'altura';
  message: string;
};

function CalculadoraIMC(): React.ReactElement {
  const [usuario, setUsuario] = useState<TInput>({
    peso: 0,
    altura: 0,
    imc: 0,
    status: "",
  });

  const [error, setError] = useState<TError | null>(null);

  const mudar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newPeso = usuario.peso;
    let newAltura = usuario.altura;
    let newImc = usuario.imc;
    let newStatus = usuario.status;

    if (name === "peso") {
      newPeso = Math.abs(parseFloat(value));

      if (isNaN(newPeso) || newPeso <= 0) {
        if (value) {
          setError({ type: 'peso', message: 'Informe um peso válido' });
          setTimeout(() => setError(null), 3000);
        }
        return;
      }
    }

    if (name === "altura") {
      newAltura = Math.abs(parseFloat(value)) / 100;

      if (isNaN(newAltura) || newAltura <= 0) {
        if (value) {
          setError({ type: 'altura', message: 'Informe uma altura válida' });
          setTimeout(() => setError(null), 3000);
        }
        return;
      }
    }

    if (newPeso > 0 && newAltura > 0) {
      newImc = newPeso / (newAltura * newAltura);
    } else {
      newImc = 0;
      newStatus = "Peso normal";
    }

    if (newImc) {
      if (newImc < 18.5) {
        newStatus = "Abaixo do peso";
      } else if (newImc <= 24.9) {
        newStatus = "Peso normal";
      } else if (newImc <= 29.9) {
        newStatus = "Sobrepeso";
      } else {
        newStatus = "Obesidade";
      }
    }

    setUsuario({
      peso: newPeso,
      altura: newAltura,
      imc: newImc,
      status: newStatus,
    });
  };

  return (
    <Container>
      {error && <Toast message={error.message} />}
      <Title as='h1'>Calculadora IMC</Title>
      <List>
        <Item><span>Peso(KG): </span><span>{usuario.peso}</span></Item>
        <Item><span>Altura(CM): </span><span>{usuario.altura * 100}</span></Item>
        <Item><span>IMC: </span><span>{usuario.imc ? usuario.imc.toFixed(2) : "0.00"}</span></Item>
        <Item><span>Status: </span><span>{usuario.status}</span></Item>
      </List>
      <InputAreaContainer>
        <InputContainer>
          <Label htmlFor="inputPeso" as='label'>Peso</Label>
          <Input onChange={mudar} type="number" name="peso" id="inputPeso" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="inputAltura" as='label'>Altura</Label>
          <Input onChange={mudar} type="number" name="altura" id="inputAltura" />
        </InputContainer>
      </InputAreaContainer>
    </Container>
  );
}

export default CalculadoraIMC;
