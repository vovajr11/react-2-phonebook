import React from 'react';
import './css/PhoneList.css';

const PhoneList = ({ contacts, onRemoveContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button type="button" onClick={() => onRemoveContact(id)}>
                    Remove
                </button>
            </li>
        ))}
    </ul>
);

export default PhoneList;
