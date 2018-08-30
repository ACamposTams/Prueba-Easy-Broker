import React, { Component } from 'react';

class Property extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organization: props.organization,
            image: props.image,
            property: props.property,
            address: {
                street: props.street,
                neighborhood: props.neighborhood,
                city: props.city,
                country: props.country,
            },
            onSale: props.onSale,
            onRent: props.onRent,
            temporaryRental: props.temporaryRental,
            prices: {
                rent: props.rent,
                sale: props.sale,
                vacational: {
                    daily: props.daily,
                    weekly: props.weekly,
                    monthly: props.monthly
                }
            }
        }
    }

    checkTemporaryRental() {
        if (this.state.temporaryRental) {
            return (
                <div>
                    <h3> Vacacional: </h3>
                    <h4> Días: {this.state.prices.vacational.daily} </h4>
                    <h4> Semanas: {this.state.prices.vacational.weekly} </h4>
                    <h4> Meses: {this.state.prices.vacational.monthly} </h4>
                </div>
            )
        } else {
            return (null)
        }
    }

    checkSale() {
        if (this.state.onSale) {
            return(
                <div>
                    <h3> Venta: {this.state.prices.sale} </h3>
                </div>
            )
        } else {
            return(
                <div>
                    <h3> No está en venta </h3>
                </div>
            )
        }
    }

    checkRent() {
        if (this.state.onRent) {
            return(
                <div>
                    <h3> Renta: {this.state.prices.rent} </h3>
                </div>
            )
        } else {
            return(
                <div>
                    <h3> No está en renta </h3>
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{paddingLeft: "20px", paddingTop: "20px"}}>
                <img src={this.state.image} alt={this.state.property} style={{width: '300px'}}/>
                <h1> {this.state.property} </h1>
                <h2> Direccion: </h2>
                <h3> {this.state.address.street} </h3>
                <h3> {this.state.address.neighborhood} </h3>
                <h3> {this.state.address.city} </h3>
                <h3> {this.state.address.country} </h3>
                <h2> Precios: </h2>
                {this.checkSale()}
                {this.checkRent()}
                {this.checkTemporaryRental()}
            </div>
        )
    }

}

export default Property