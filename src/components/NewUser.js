import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { loginUser } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { Redirect } from 'react-router-dom';

class NewUser extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    redirectToReferrer: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, username, password } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddUser( { name, username, password} ))
      .then(() => {
        dispatch(showLoading());

        // Login user in fake remote server/database.
        loginUser(username, password)
        .then(({ users, questions, authedUser }) => {
          if (authedUser !== null) {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(authedUser));
            this.setState({
              name: '',
              username: '',
              password: '',
              redirectToReferrer: true
            });
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
      });
  }

  render() {
    const { name, username, password, redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='enter your name'
            value={name}
            name='name'
            onChange={this.handleChange}
          />
          <input
            type='file'
          />
          <input
            placeholder='username'
            value={username}
            name='username'
            onChange={this.handleChange}
          />
          <input
            placeholder='password'
            value={password}
            name='password'
            type='password'
            onChange={this.handleChange}
          />
          <button
            type='submit'
            disabled={username === '' || password === '' || name === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewUser);
