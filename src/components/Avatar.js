import React, { Component } from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../img/default_avatar.jpg';

class Avatar extends Component {
  render() {
    let { avatar } = this.props;
    if (avatar === '') {
      avatar = defaultAvatar;
    }

    return (
      <div>
        <img
          src={avatar}
          alt='Avatar'
        />
      </div>
    );
  }
}

function mapStateToProps ({ users } , { id }) {
  const user = users[id];

  return {
    avatar: user.avatarURL
  };
}

export default connect(mapStateToProps)(Avatar);
