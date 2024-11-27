import { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';


export default function comHookStateEffect() {
    const [count, setCount] = useState(0);
    const title = `Você clicou ${count} vezes!`;
    useDocumentTitle(title);
    return (
        <div>
            <p>Você clicou {count} vezes!</p>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui (com hook customizado)
            </button>
        </div>
    );
}
