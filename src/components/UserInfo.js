import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';

class UserInfo extends Component {
  render() {
    const { name, id } = this.props.user;

    return (
      <div>
        <span>{name}</span>
        <div className='avatar-container'>
          <Avatar id={id}/>
        </div>
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
