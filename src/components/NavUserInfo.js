import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import Logout from './Logout';


class NavUserInfo extends Component {
  render() {
    const { authedUser } = this.props;

    return (
      authedUser !== null &&
        <Fragment>
          <UserInfo id={authedUser}/>
          <Logout />
        </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavUserInfo);
