import React from 'react';
export default class FormErrorMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>A sua idade deve ser numérica</strong>;
            }
        }
        this.setState({ errormessage: err });
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
                        type='text'
                        name='age'
                        onChange={this.myChangeHandler} />
                </label>
                {this.state.errormessage}
            </form>
        );
    }
}