import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSignOutUser } from '../actions/authedUser';
import {
  Button
} from 'react-bootstrap';

class SignOutButton extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;

    dispatch(handleSignOutUser(authedUser));
  }

  render() {
    return (
      <Button bsStyle='danger' onClick={this.handleSubmit}>
        Sign out
      </Button>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(SignOutButton);
