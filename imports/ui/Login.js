import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      <div className="boxed-view">
        <div className="boxed-view__box">

          <h1> Short Link </h1>

          {this.state.error}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Enter Email" />
            <input type="password" ref="password" name="password" placeholder="Enter Password" />
            <button className="button"> Log In </button>
          </form>

          <Link to="/signup"> Register </Link>
        </div>
      </div>
    )
  }
}
