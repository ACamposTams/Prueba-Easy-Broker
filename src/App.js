import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Property from './Property'
import PropertyContact from './PropertyContact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      properties: [],
      showDetails: false,
      detailedProperty: ""
    }
    this.showInfo = this.showInfo.bind(this)
  }
  
  componentDidMount() {
    axios.get('http://www.mocky.io/v2/5b6a3202320000ed11af5f20')
      .then(response => {
        this.setState({
          loaded: true,
          properties: response.data
        })
      }
      )
  }

  showInfo(property) {
    this.setState({
      showDetails: true,
      detailedProperty: property
    })
  }

  showProperties() {
    var listProperties = this.state.properties.map((property) => 
      <div onClick={this.showInfo.bind(this,property)} style={{borderStyle: "solid", borderWidth: "2px"}}>
        <Property 
          organization={property.organization.name}
          property={property.name} 
          image={property.title_image_full} 
          street={property.address_street}
          neighborhood={property.neighborhood ? property.neighborhood.name : null }
          city={property.city.name}
          country={property.country.name}
          rent={property.rent}
          onSale = {property.sale}
          onRent = {property.rental}
          sale={property.sale_price}
          temporaryRental = {property.temporary_rental}
          daily={property.daily_rate}
          weekly={property.weekly_rate}
          monthly={property.monthly_rate}
        />
      </div>
    )
    if (this.state.showDetails) {
      var detailedProperty = <PropertyContact 
                                organization={this.state.detailedProperty.organization.name} 
                                property={this.state.detailedProperty.name} 
                                street={this.state.detailedProperty.address_street}
                                neighborhood={this.state.detailedProperty.neighborhood ? this.state.detailedProperty.neighborhood.name : null }
                                city={this.state.detailedProperty.city.name}
                                country={this.state.detailedProperty.country.name}
                              />
      return (detailedProperty)
    } else {
      return (listProperties)
    }
  }
  
  render() {
    return (
      this.state.loaded ? 
      this.showProperties() : null
    );
  }
}

export default App;
