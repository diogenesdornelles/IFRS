import React from 'react';
export default class FormSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coco' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('Seu sabor favorito é: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha seu sabor favorito:
                    <select value={this.state.value}
                        onChange={this.handleChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                </label><input type="submit" value="Enviar" />
            </form>
        );
    }
}
