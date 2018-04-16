import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSignOutUser } from '../actions/authedUser';

class Logout extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;

    dispatch(handleSignOutUser(authedUser));
  }

  render() {
    return (
      <button onClick={this.handleSubmit}>
        Sign out
      </button>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Logout);
