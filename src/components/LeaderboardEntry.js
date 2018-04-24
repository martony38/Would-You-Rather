import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';
import Avatar from './Avatar';
import goldMedal from '../img/gold-medal.png';
import silverMedal from '../img/silver-medal.png';
import bronzeMedal from '../img/bronze-medal.png';
import defaultMedal from '../img/default-medal.png';

class LeaderboardEntry extends Component {
  medalType(rank) {
    switch (rank) {
      case 1 :
        return goldMedal
      case 2 :
        return silverMedal
      case 3 :
        return bronzeMedal
      default :
        return defaultMedal
    }
  }

  render() {
    const { user, rank } = this.props;
    const totQ = user.questions.length;
    const totA = Object.keys(user.answers).length;

    return (
      <tr>
        <td>
          <div className='medal' style={{backgroundImage: `url(${this.medalType(rank)})`}}>{rank > 3 && rank}</div>
        </td>
        <td>
          <div className='avatar-container'>
            <Avatar id={user.id}/>
          </div>
          <span className='leaderboard-user-name'>{user.name}</span>
        </td>
        <td>
          {totQ > 0 && <div className='q-and-a-count'><Badge className='q-count'>{totQ}</Badge>{` Question${totQ > 1 ? 's' : ''}`}</div>}
          {totA > 0 && <div className='q-and-a-count'><Badge className='a-count'>{totA}</Badge>{` Answer${totA > 1 ? 's' : ''}`}</div>}
        </td>
      </tr>
    );
  }
}

function mapStateToProps ({ users }, { id }) {
  const user = users[id];

  return {
    user
  };
}

export default connect(mapStateToProps)(LeaderboardEntry);
