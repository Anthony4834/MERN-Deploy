import './App.css';
import {Router} from '@reach/router';
import Main from './components/main/main';
import Header from './components/header/header';
import Create from './components/create/create';
import PetDisplay from './components/displayPet/displayPet';
import PetEdit from './components/edit/edit';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [pets, setPets] = useState(null);
  const [update, forceUpdate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get('http://localhost:8000/api/pets', {
      cancelToken: new axios.CancelToken(tkn => {cancel = tkn})
    })
      .then(res => {setLoading(false); console.log(res.data.pets); setPets(res.data.pets)})
      .catch(err => console.log(err));

    return () => cancel();
  }, [update])

  return (
    <div className="App">
      <Header page={page}/>
      {loading ? <p>Loading..</p> : null}
      <Router>
        {pets && <Main path="/" pets={pets} setPage={setPage}/>}
        <Create path="/pets/new/" forceUpdate={forceUpdate} setPage={setPage}/>
        <PetDisplay path="/pet/:id" forceUpdate={forceUpdate} setPage={setPage}/>
        <PetEdit path="/pet/:id/edit" forceUpdate={forceUpdate} setPage={setPage}/>
      </Router>
    </div>
  );
}

export default App;
