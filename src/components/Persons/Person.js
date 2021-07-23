import React, { useState } from 'react';
import './Person.css'

const Person = (props) => {
    const {picture, name,email,cell} = props.users;
    const {title,first,last} = name;

    const [phone, setPhone] = useState('');

    const showPhone = () => setPhone(cell);
    
    return (
        <div className="person">
            <div className="personImg">
                <img src={picture.large} alt="" />
            </div>
            <div className="personDetails">
                <h2>Name: {title +" "+first+" "+last} </h2>
                <h6>Email: {email} </h6>
                <h5>Phone no: {phone}</h5>
                <button onClick={showPhone} >Show Phone no</button>
                <button onClick={() => props.handleAddTeam(props.users)}>Add to Team</button>
            </div>
        </div>
    );
};

export default Person;