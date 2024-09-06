import { useState,useEffect } from 'react';
import axios from 'axios';
import filter from './componentes/filter';
import footer from './componentes/footer';
import table from './componentes/table';
import createform from './componentes/createform';
import './App.css';
import './index.css';

function App() {
  const [people, setPeople] = useState([])
  const [search, setSearch] = useState([])
  const [filteredPeople, setFilteredPeople] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/posts/1')
    .then(response => {
      setPeople(response.data);
      setFilteredPeople(response.data);
  })
  .catch((error) => console.log("error al obtener datos", error));
},[]);

  const handleCreate = (newPerson) => {
    axios.post('http://localhost:3000/users', newPerson)
    .then((response) => {
      setPeople([...people, response.data]);
      setFilteredPeople([...filteredPeople, response.data]);
    })
    .catch((error) => console.log("error al obtener datos", error));
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/users/${id}')
    .then(() => {
      setPeople(people.filter(person => person.id !== id));
      setFilteredPeople(filteredPeople.filter(person => person.id !== id))
    })
    .catch((error) => console.log("error al eliminar datos", error));
  }
  return (
    <div className='App'>
      <filter
        search={search}
        setSearch={setSearch}
        people={people}
        setFilteredPeople={setFilteredPeople}
      />
    <createform onSumbit={handleCreate}/>
    <table data={filteredPeople} onDelete={handleDelete}/>
    <footer />  
    </div>
  )
}

export default App
