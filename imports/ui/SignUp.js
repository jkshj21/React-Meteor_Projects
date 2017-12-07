import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      error:""
    };
  }

  onSubmit(event){
    event.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9){
      return this.setState({error: "Password is invalid"});
    }

    Accounts.createUser({email,password}, (error) => {
      let err = error? error.reason : "";
      this.setState({error:err})
    });

  }

  render(){
    return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <p> Register Short Link </p>
        {this.state.error}
        <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Enter Email" />
          <input type="password" ref="password" name="password" placeholder="Enter Password" />
          <button className="button"> Register </button>
        </form>
        <Link to="/"> Have an account? </Link>
      </div>
    </div>
    )
  }
}
