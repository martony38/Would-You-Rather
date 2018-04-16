import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/shared';
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;

    dispatch(handleLogin(username, password));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.authedUser !== null) {
      return <Redirect to={from} />
    }

    return (
      <div>
        Please login
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name='username'
            type='text'
            placeholder='username'/>
          <input
            onChange={this.handleChange}
            name='password'
            type='password'
            placeholder='password'/>
          <button
            type='submit'
            disabled={username === '' || password === ''}>
            Login
          </button>
        </form>
        <Link to='/register'>
          Register as new user
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
