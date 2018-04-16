import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { loginUser } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch } = this.props;

    dispatch(showLoading());

    // Login user in fake remote server/database.
    loginUser(username, password)
      .then(({ users, questions, authedUser }) => {
        if (authedUser !== null) {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(setAuthedUser(authedUser));
          this.setState({ redirectToReferrer: true });
        } else {
          // TODO: show info message to user
          console.log('wrong username/password');
        }
        dispatch(hideLoading());
      })
      .catch((e) => {
        dispatch(hideLoading());

        // TODO: show info message to user
        console.log('There was an error. Try Again.');
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password, redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
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

export default connect()(Login);
