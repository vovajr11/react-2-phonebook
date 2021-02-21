import React, { Component } from 'react';
import './css/PhoneEditor.css';

export default class PhoneEditor extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChangeName = e => {
        this.setState({
            name: e.target.value,
        });
    };

    handleChangeNumber = e => {
        this.setState({
            number: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;

        this.props.onAddContact(name, number);

        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="FormEditor">
                <label className="FormEditor-label">
                    Name
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                        className="FormEditor-input"
                    />
                </label>

                <label className="FormEditor-label">
                    Number
                    <input
                        type="text"
                        value={this.state.number}
                        onChange={this.handleChangeNumber}
                        className="FormEditor-input"
                    />
                </label>

                <button type="submit" className="FormEditor-button">Add contact</button>
            </form>
        );
    }
}
