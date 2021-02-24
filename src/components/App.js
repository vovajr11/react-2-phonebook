import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import PhoneEditor from './PhoneEditor/PhoneEditor';
import PhoneList from './PhoneList';
import Filter from './Filter';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: '',
    };

    addContact = (name, number) => {
        const searchSameName = this.state.contacts
            .map(cont => cont.name)
            .includes(name);

        console.log(searchSameName);

        if (searchSameName) {
            alert(`${name} is already in contacts`);
        } else if (name.length === 0) {
            alert('Fields must be filled!');
        } else {
            const contact = {
                id: uuid(),
                name,
                number,
            };
            this.setState(prevState => ({
                contacts: [...prevState.contacts, contact],
            }));
        }
    };

    removeContact = contactId => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    ({ id }) => id !== contactId,
                ),
            };
        });
    };

    changeFilter = filter => {
        this.setState({ filter });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
                <h1>PhoneBook</h1>
                <PhoneEditor onAddContact={this.addContact} />

                <h4>Find contacts by name</h4>
                <Filter value={filter} onChangeFilter={this.changeFilter} />

                <h1>Contacts</h1>
                <PhoneList
                    contacts={visibleContacts}
                    onRemoveContact={this.removeContact}
                />
            </div>
        );
    }
}
