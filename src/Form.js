import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            price: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const item = {
            name: this.state.name,
            price: parseFloat(this.state.price)
        };

        this.props.onItemAddition(item);

        this.setState({
            name: "",
            price: ""
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={ this.state.name }
                    onChange={ this.handleInputChange } />
                <input 
                    type="number" 
                    placeholder="Price"
                    name="price"
                    value={ this.state.price }
                    onChange={ this.handleInputChange } />
                <button
                    type="submit"
                    disabled={!this.state.name || !this.state.price}>
                    Add
                </button>
            </form>
        );
    } 
}

export default Form;