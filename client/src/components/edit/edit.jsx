import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './edit.css';
import Form from '../form/form';

const PetEdit = ({id, forceUpdate, setPage}) => {

    const [pet, setPet] = useState(null);
    const [latest, setLatest] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {setPet(res.data.pet); setPage('edit')})
            .catch(err => console.log('Error: ', err))
    }, [latest]);

    return pet !== null ? (
        <div id="petEdit">
            <h3>Edit {pet.name}</h3>
            <Form editing={true} pet={pet} forceUpdate={forceUpdate} setLatest={setLatest} />
        </div>
        ) :
    <p>The void</p>
}

export default PetEdit;