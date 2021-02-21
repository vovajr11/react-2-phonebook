import React from 'react';
import './css/PhoneList.css'

const PhoneList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}</p>
                <p>{number}</p>
            </li>
        ))}
    </ul>
);

export default PhoneList;
