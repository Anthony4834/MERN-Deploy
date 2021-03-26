import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import './form.css';


const Form = ({editing=false, pet=null, forceUpdate, setLatest}) => {

    const [err, setErr] = useState(null);
    const toEdit = pet;

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.type.value);

        if(editing === false) {
            axios.post('http://localhost:8000/api/pets/new', {
                name: e.target.name.value,
                type: e.target.type.value,
                desc: e.target.desc.value,
                skills: {
                    skillOne: e.target.skill1.value,
                    skillTwo: e.target.skill2.value,
                    skillThree: e.target.skill3.value
                }
            })
                .then(res => {console.log(res); forceUpdate(res); navigate('/')})
                .catch(err => {
                    console.log(err);
                    setErr(err.response.data.errors[Object.keys(err.response.data.errors)[0]].message)
                })
        } else {
            axios.put(`http://localhost:8000/api/pet/${pet._id}/edit`, {
                name: e.target.name.value,
                type: e.target.type.value,
                desc: e.target.desc.value,
                skills: {
                    skillOne: e.target.skill1.value,
                    skillTwo: e.target.skill2.value,
                    skillThree: e.target.skill3.value
                }
        })
            .then(res => {forceUpdate(res); setLatest(res); navigate(`/pet/${pet._id}`)})
            .catch(err => {setErr(err.response.data.errors[Object.keys(err.response.data.errors)[0]].message)})
        }
        
    }
    

    return(
        <div className="main">
            {err ? <p className="err">{err}</p> : null} <br/>
            <form onSubmit={e => submitHandler(e)}>
                <div>
                    <section className="inputWrapper">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" defaultValue={editing ? toEdit.name : null}/> <br/>
                    </section>
                    <section className="inputWrapper">
                        <label htmlFor="type">Type</label>
                        <input type="text" name="type" id="type" defaultValue={editing ? toEdit.type : null}/> <br/>                    
                    </section>
                    <section className="inputWrapper">
                        <label htmlFor="desc">Description</label>
                        <input type="text" name="desc" id="desc" defaultValue={editing ? toEdit.desc : null}/> <br/>                    
                    </section>
                </div>
                <div className="formRight">
                    <section className="inputWrapper">
                        <label htmlFor="skill1">Skill 1 (optional)</label>
                        <input type="text" name="skill1" id="skill1" defaultValue={editing ? toEdit.skills.skillOne : null}/> <br/>
                    </section>
                    <section className="inputWrapper">
                        <label htmlFor="skill2">Skill 2 (optional)</label>
                        <input type="text" name="skill2" id="skill2" defaultValue={editing ? toEdit.skills.skillTwo : null}/> <br/>                    
                    </section>
                    <section className="inputWrapper">
                        <label htmlFor="skill3">Skill 3 (optional)</label>
                        <input type="text" name="skill3" id="skill3" defaultValue={editing ? toEdit.skills.skillThree : null}/> <br/>                    
                    </section>
                </div>
                <div className="submitWrapper">
                    <input type="submit" value="Submit"/> {editing ? <button onClick={e => navigate(`/pet/${pet._id}`)}>Cancel</button> : null}
                </div>
            </form>
        </div>
    )
}

export default Form;