import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import defaultAvatar from '../img/default_avatar.jpg';

class Avatar extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

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
