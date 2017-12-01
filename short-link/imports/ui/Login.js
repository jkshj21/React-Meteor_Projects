import React, {Component} from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
export default class NotFound extends Component {

  constructor(props){
    super(props);
    this.state={
      error:""
    }
  }

  componentWillMount(){
    if (Meteor.userId()){
      this.props.history.replace('/link');
    }
  }

  onSubmit(event) {
    event.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (error) => {
      let err = error ? error.reason : "";
      this.setState({error:err})
    });

    event.target.email.value="";
    event.target.password.value="";
  }

  render(){
    return (
      <div>
        <p> Log In Short Link </p>

        {this.state.error}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Enter Email" />
          <input type="password" ref="password" name="password" placeholder="Enter Password" />
          <button> Log In </button>
        </form>

        <p onClick={() => this.props.history.replace('/signup')}> Sign Up? </p>
      </div>
    )
  }
}
