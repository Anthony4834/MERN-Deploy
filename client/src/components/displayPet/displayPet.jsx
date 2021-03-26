import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import './displayPet.css';

const PetDisplay = ({id, setPage, forceUpdate}) => {

    const [pet, setPet] = useState(null);
    const [skills, setSkills] = useState([]);
    const [liked, setLiked] = useState(false);
    const [latest, setLatest] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                let temp = [];
                setPet(res.data.pet);
                Object.keys(res.data.pet.skills).map((skill) => {
                    temp.push(res.data.pet.skills[skill]);
                    return null;
                })
                setSkills(temp);
                setPage('display');
            })
            .catch(err => console.log('Error: ', err)) // eslint-disable-next-line
    }, [latest]);

    const clickHandler = (e, type) => {
        if(type === 'delete') {
            axios.delete(`http://localhost:8000/api/pet/${pet._id}/delete`)
                .then(res => {console.log(res.data.deleted); forceUpdate(res); navigate('/')})
                .catch(err => console.log(err));
        } else {
            axios.put(`http://localhost:8000/api/pet/${pet._id}/edit`, {likes: pet.likes + 1})
            .then(res => {setLiked(true); setLatest(res)})
            .catch(err => console.log(err))
        }
    }

    return pet !== null ? (
        <div id="petDetails">
            <section>
                <h3>Details about {pet.name}</h3>
                <button className="grn" id="adopt" onClick={e => clickHandler(e, 'delete')}>Adopt {pet.name}</button>
            </section>
            <p><span className="title">Pet Type:</span> {pet.type}</p>
            <p><span className="title">Description:</span>{pet.desc}</p>
            <p id="skills"><span className="title">Skills: </span></p>
            <ul>
                {skills.map((skill) => <li>{skill}</li>)}
            </ul> <br/>
            <button onClick={e => navigate(`/pet/${pet._id}/edit`)}>Edit</button><button className="grn" id="like" disabled={liked ? true : false }onClick={e => clickHandler(e, 'like')}>Like</button> <p id="likes">{pet.likes} like(s)</p> <br/>
        </div>
    ) :
    <p>The void</p>
}

export default PetDisplay;