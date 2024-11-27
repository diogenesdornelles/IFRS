import React from 'react';
export default class NameFormNC extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        alert('O valor é: ' + this.input.value);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}