import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import Avatar from './Avatar';

class OptionStats extends Component {
  render() {
    const { authedUser, text, votes, votePercent, selectedAnswer } = this.props;

    return (
      <Panel
        className='text-center option-stats'
        bsStyle={selectedAnswer === true ? 'success' : 'danger'}
      >
        <Panel.Heading>
          <Panel.Title className='option-title'>
            {text.substr(0,1).toUpperCase() + text.slice(1,)}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div>{`${votes} vote${votes === 1 ? '' : 's'}`}</div>
          {/* TODO: limit number of digits shown */}
          <div>{votePercent} %</div>
          {selectedAnswer === true &&
            <div className="avatar-container">
              <Avatar id={authedUser}/>
            </div>}
        </Panel.Body>
      </Panel>
    );
  }
}

function mapStateToProps ({ authedUser, questions }, { qid, option }) {
  const question = questions[qid];
  const text = question[option].text;
  const votes = question[option].votes.length;
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
  const votePercent = question[option].votes.length / totalVotes * 100;
  const selectedAnswer = question[option].votes.includes(authedUser);

  return {
    text,
    votes,
    votePercent,
    selectedAnswer,
    authedUser
  };
}

export default connect(mapStateToProps)(OptionStats);
