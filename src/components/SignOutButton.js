import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button
} from 'react-bootstrap';
import { handleSignOutUser } from '../actions/authedUser';

class SignOutButton extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    authedUser: PropTypes.string.isRequired
  };

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
