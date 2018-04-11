import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionStats extends Component {
  render() {
    const { optionOne, optionTwo, answer } = this.props;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    return (
      <div>
        <div className={answer === 'optionOne' ? 'chosen-answer' : ''}>
          {optionOne.text}
          {optionOne.votes.length} votes
          {optionOne.votes.length / totalVotes * 100} %
        </div>
        <div className={answer === 'optionTwo' ? 'chosen-answer' : ''}>
          {optionTwo.text}
          {optionTwo.votes.length} votes
          {optionTwo.votes.length / totalVotes * 100} %
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ questions } , { qid, answer } ) {
  const { optionOne, optionTwo } = questions[qid];

  return {
    optionOne,
    optionTwo,
    answer
  };
}

export default connect(mapStateToProps)(QuestionStats);
