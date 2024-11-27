import { useState } from 'react'
import './App.css'

function Header(): JSX.Element {
    const [count, setCount] = useState(0)


    function handleClick(): void {
        setCount(count + 1);
    }

    return (
        <header>
            <h1 className='bg-lime-600 p-8 font-bold text-4xl text-white'>Minha primeira aplicação React-Vite</h1>
            <p>{count}</p>
            <button className="" onClick={handleClick}>Clique me</button>
        </header>
    )
}

export default Header