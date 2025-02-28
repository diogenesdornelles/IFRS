import React from 'react';
export default class FormTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('Uma dissertação foi enviada: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Dissertação:
                    <textarea value={this.state.value}
                        onChange={this.handleChange} rows="5" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}
