import './App.css'
import { useState } from 'react'
import TabelaCarros from './tabelaCarros'
import PesquisaPorMarca from './pesquisaPorMarca'


function App(): JSX.Element {
  const [marca, setMarca] = useState("")

  return (
    <main className=''>
      {PesquisaPorMarca(marca, setMarca)}
      <br />
      <br />
      {TabelaCarros(marca)}

    </main>
  )
}

export default App
