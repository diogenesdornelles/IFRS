import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';


function App(): JSX.Element {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/user?ID=12345')
      .then(function (response) {
        setUsers(response.data)
      })
      .catch(function (error) {
        console.error(error);
      })
  }, [])


  return (
    <section>
      <p></p>
    </section>
  )
}

export default App
