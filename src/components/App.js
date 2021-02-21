import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import PhoneEditor from './PhoneEditor/PhoneEditor';
import PhoneList from './PhoneList';
import Filter from './Filter';

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: '',
    };

    addContact = (name, number) => {
        const contact = {
            id: uuid(),
            name,
            number,
        };

        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, contact],
            };
        });

    };

    // // return contacts.filter(contact =>
    // //     contact.name.toLowerCase().includes(filter.toLowerCase()),
    // // );

    // checkDublicates = (name, number) => {
    //     const { contacts } = this.state;
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(name.toLowerCase()),
    //     );
    // };

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
                <PhoneList contacts={visibleContacts} />
            </div>
        );
    }
}
