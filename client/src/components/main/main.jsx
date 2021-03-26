import React, { useEffect } from 'react';
import './main.css';
import Table from '../table/table';

const Main = ({pets, forceUpdate, setPage}) => {

    useEffect(() => {
        setPage('home');
    }, []);

    return (
        <div className="main">
            <h3>These pets are looking for a good home</h3>
            <Table pets={pets} />
        </div>
    );
    
}

export default Main;