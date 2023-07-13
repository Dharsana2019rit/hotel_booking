
import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

class ImgDept extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
       
        }
      }
   
      componentDidMount(){
        fetch("http://localhost:8080/Hotel/HotelClass")
        .then((response)=>response.json()
        .then((resp)=>this.setState({users : resp})));
    }


    render() {
        return <div>
            <CardGroup>
                {this.state.users.map((each,i) => (
                <Card>
               
                <Card.Body>
                <Card.Title>{each.first_name}</Card.Title>
                <Card.Text>{each.id}</Card.Text>
                <Card.Text>{each.email}</Card.Text>
                </Card.Body>
                </Card>
                ))
               
            }
            </CardGroup>
            
           
        </div>;
    }
}
 
export default ImgDept;
