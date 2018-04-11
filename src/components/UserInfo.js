import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';

class UserInfo extends Component {
  render() {
    const { name, id } = this.props.user;

    return (
      <div>
        <Avatar id={id}/>
        <span>{name}</span>
      </div>
    );
  }
}

function mapStateToProps ({ users }, { id }) {
  const user = users[id];

  return {
    user
  };
}

export default connect(mapStateToProps)(UserInfo);
