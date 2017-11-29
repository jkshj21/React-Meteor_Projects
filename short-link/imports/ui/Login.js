import React, {Component} from 'react';
import {Link} from 'react-router';
export default class NotFound extends Component {

  render(){
    return (
      <div>
        <form>
          <input
              type="text"
              name="username"
              placeholder="Enter Username"
            />
            <input
                type="text"
                name="password"
                placeholder="Enter Password"
              />
            <button>
              Log In
            </button>
        </form>

        <Link to="/signup"> Register? </Link>
      </div>
    )
  }
}
