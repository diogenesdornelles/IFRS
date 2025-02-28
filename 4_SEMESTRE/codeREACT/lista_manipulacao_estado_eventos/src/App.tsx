import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import { useState } from 'react';


const App: React.FC = () => {

  const list: string[] = [
    "Ana",
    "Jao",
    "Robert",
    "Maria",
    "Soraia",
    "Tatiana",
    "Rafael",
    "Diego",
    "José",
    "Matheus",
    "Moisés",
    "Carlos",
    "Luiz",
    "Adroaldo"
  ]
  const [peopleList, setPeopleList] = useState<string[]>(list)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    filterPeople(value)
  }

  const filterPeople = (value: string) => {
    let filteredPeople = list.filter(person => {
      return person.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
    })
    if (filteredPeople.length > 0) {
      setPeopleList(filteredPeople)
    }
    else {
      setPeopleList(list)
    }
  }

  return (
    <div>
      <Header />
      <section>
        <div className='search'>
          <label htmlFor="search">Procurar</label>
          <input type="text" name="search" id="search" onChange={handleChange} />
        </div>
        <ul>
          {peopleList.map((person, i) => (
            <li key={i}>
              {i + 1} - {person}
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default App;