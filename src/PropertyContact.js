import React, { Component } from 'react';

class PropertyContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organization: props.organization,
            property: props.property,
            address: {
                street: props.street,
                neighborhood: props.neighborhood,
                city: props.city,
                country: props.country,
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        alert("Mensaje Enviado con éxito")
    }

    render() {
        return (
            <div style={{paddingLeft: "20px", paddingTop: "20px"}}>
                <h1> {this.state.organization} </h1>
                <h1> {this.state.property} </h1>
                <h2> Direccion: </h2>
                <h3> {this.state.address.street} </h3>
                <h3> {this.state.address.neighborhood} </h3>
                <h3> {this.state.address.city} </h3>
                <h3> {this.state.address.country} </h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label> Mensaje </label>
                        <textarea/>
                        <br/>
                        <input type="submit" value="Enviar"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default PropertyContact