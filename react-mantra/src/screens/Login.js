import React from 'react';
import {Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';

class Login extends React.PureComponent {
	constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
        };
    }

    validateForm() {
	    return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
	    this.setState({
	      [event.target.id]: event.target.value
	    });
	}

	handleSubmit = event => {
	    event.preventDefault();

	 	axios.post('http://localhost:8085/oauth/token?grant_type=password&username='+this.state.email+'&password='+this.state.password, {}, 
	 		{headers:{Authorization: "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0"}})
		.then(function (response) {
		    console.log(response);
		})
		.catch(function (error) {
		    console.log(error);
		});
	}

	render(){
		return(
			<div style={style.formStyle}>
				<form onSubmit={this.handleSubmit}>
			        <FormGroup controlId="email" bssize="large">
			          <FormLabel>Email</FormLabel>
			          <FormControl
			            autoFocus
			            type="email"
			            value={this.state.email}
			            onChange={this.handleChange}
			          />
			        </FormGroup>
			        <FormGroup controlId="password" bssize="large">
			          <FormLabel>Password</FormLabel>
			          <FormControl
			            value={this.state.password}
			            onChange={this.handleChange}
			            type="password"
			          />
			        </FormGroup>
			        <Button block bssize="large" disabled={!this.validateForm()} type="submit" style={style.submitButton}>
			          Login
			        </Button>
			    </form>
			</div>
		);
	}
}

const style = {
	formStyle: { 
		display: "flex", 
		justifyContent: "center", 
		alignItems: "center", 
		marginTop: "15%", 
		marginLeft: "32%", 
		width: "30%", 
		border: "3px solid #5A7384", 
		padding: "10px"
	},
	submitButton: {
		backgroundColor: "#5A7384"
	}
}

export default Login;