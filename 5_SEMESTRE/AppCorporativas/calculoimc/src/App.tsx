import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState<number>(0)
  const [altura, setAltura] = useState<number>(0)
  const [imc, setImc] = useState<number>(0)
  const [resultado, setResultado] = useState<string>('')

  const validar = (e) => {
    try {
      const input = parseFloat(e.target.value);
      if (e.target.name === "peso") {
        setPeso(input);
        return
      }
      setAltura(input)
    } catch {
      console.log(e.value);
    }
  }

  const calcular = () => {

    if (peso && altura) {
      const i = peso / Math.pow(altura / 100, 2)
      setImc(i)
      if (i < 18.5) {
        setResultado('Abaixo do peso')
        return
      }
      if (i <= 24.9) {
        setResultado('Peso norma')
        return
      }
      if (i <= 29.9) {
        setResultado('Sobrepeso')
        return
      }
      if (i <= 34.9) {
        setResultado('Obesidade grau I')
        return
      }
      if (i <= 39.9) {
        setResultado('Obesidade grau II')
        return
      }
      setResultado(" Obesidade grau III")
    }

  }

  return (
    <div id="container">
      <h1>Calculadora IMC</h1>
      <form>
        <label htmlFor="peso">Informe peso (kg): </label>
        <input type="text" name="peso" id="peso" onChange={validar} value={peso} />
        <label htmlFor="altura">Informe altura (cm): </label>
        <input type="text" name="altura" id="altura" onChange={validar} value={altura} />
        <button onClick={calcular}>Calcular</button>
      </form>
      <div id="imc">
        <p>IMC</p>
        <p>{imc}</p>
      </div>
      <div id="resultado">
        <p>Resultado</p>
        <p>{resultado}</p>
      </div>

    </div>
  )
}

export default App
