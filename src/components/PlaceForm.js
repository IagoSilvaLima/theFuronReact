import React, { Component } from 'react';

class PlaceForm extends Component {
    constructor(props) {
        super(props);
        this.addPlace = this.addPlace.bind(this);
    }

    addPlace() {
        const place = { name: this.input.value };
        this.input.value = '';
        this.props.addPlace(place);
    }

    render() {
        return (
            <div className="row">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">
                            Novo Lugar
                        </span>
                        <button className="btn-floating btn-large halfway-fab waves-effect waves-light blue" onClick={this.addPlace}>Salvar</button>
                        <div className="row">
                            <form className="col col s12">
                                <div className="input-field col s12">
                                    <input placeholder="Digite o nome do lugar.." type="text" id="nome" ref={(input) => this.input = input} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default PlaceForm;