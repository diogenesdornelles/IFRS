import React from 'react';
export default class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
            if (!Number(val)) {
                alert("Sua idade deve ser um número");
            }
        }
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form>
                <h1>Olá {this.state.username} - {this.state.age}</h1>
                <label>
                    Digite seu nome:
                    <input
                        type='text'
                        name='username'
                        onChange={this.myChangeHandler} />
                </label>
                <label>
                    Digite sua idade:
                    <input
                        type='number'
                        name='age'
                        onChange={this.myChangeHandler} />
                </label></form>
        );
    }
}