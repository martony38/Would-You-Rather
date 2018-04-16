import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../actions/users';
import { Redirect } from 'react-router-dom';

class NewUser extends Component {
  state = {
    name: '',
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, username, password } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddUser({ name, username, password}));
  }

  render() {
    const { name, username, password } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.authedUser !== null) {
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewUser);
