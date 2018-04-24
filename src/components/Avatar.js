import React, { Component } from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../img/default_avatar.jpg';
import { Image } from 'react-bootstrap';

class Avatar extends Component {
  render() {
    let { avatar, name } = this.props;
    if (avatar === '') {
      avatar = defaultAvatar;
    }

    return (
      <Image className='avatar' src={avatar} alt={`Avatar of ${name}`} circle />
    );
  }
}

function mapStateToProps ({ users } , { id }) {
  const user = users[id];

  return {
    avatar: user.avatarURL,
    name: user.name
  };
}

export default connect(mapStateToProps)(Avatar);
