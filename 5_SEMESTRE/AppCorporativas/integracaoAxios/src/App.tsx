import './App.css'
import MyAll from './hooks/MyAll'
import MyDelete from './hooks/MyDelete'
import MyGet from './hooks/MyGet'
import MyPost from './hooks/MyPost'
import MyUpdate from './hooks/MyUpdate'


function App(): JSX.Element {


  return (
    <>
      <MyAll />
      <MyGet />
      <MyDelete />
      <MyPost />
      <MyUpdate />
    </>
  )
}

export default App
