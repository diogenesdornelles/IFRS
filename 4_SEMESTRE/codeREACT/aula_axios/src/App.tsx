import './App.css'
import { useEffect, useState } from 'react';
import MyPost from './components/MyPost';
import axios from 'axios';
import MyDelete from './components/MyDelete';
import MyPatch from './components/MyPatch';
import MyAll from './components/myAll';
import MyAsyncAwait from './components/MyAsincAwait';
import MyTransform from './components/MyTransform';
import MyInterceptor from './components/MyInterceptor';


type TUser = {
  id: string;
  first_name: string;
  last_name: string;
}

type TUsers = TUser[]

function App(): JSX.Element {
  const [users, setUsers] = useState<TUsers>([])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://reqres.in/api/users'
    })
      .then(response => {
        setUsers(response.data.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const allUsers = users.map((user, index) => (
    <li key={index}>{user.id}: {user.first_name} {user.last_name}</li>
  )
  );

  return (
    <>
      <h1>Teste com API Axios</h1>
      <ul>
        {allUsers}
      </ul>
      <MyPost />
      <MyDelete />
      <MyPatch />
      <MyAll />
      <MyAsyncAwait />
      <MyTransform />
      <MyInterceptor />
    </>
  );
}
export default App;
