import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardEntry from './LeaderboardEntry';

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    return (
      <ul>
        {Object.keys(users)
          .sort((a,b) => (
            users[b].questions.concat(Object.keys(users[b].answers)).length
            - users[a].questions.concat(Object.keys(users[a].answers)).length
          ))
          .map((uid) => (
            <li key={uid}>
              <LeaderboardEntry
                id={uid}
                totalQ={users[uid].questions.length}
                totalA={Object.keys(users[uid].answers).length} />
            </li>
          ))}
      </ul>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);