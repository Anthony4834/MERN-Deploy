import React from 'react';
import './create.css';
import Form from '../form/form';


const Create = ({forceUpdate, setPage}) => {

    setPage('create');
    
    return(
        <div className="main">
            <h3>Know a pet needing a home?</h3>
            <Form forceUpdate={forceUpdate} />
        </div>
    )
}

export default Create;