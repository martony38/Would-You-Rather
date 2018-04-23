import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import OptionStats from './OptionStats';

class QuestionStats extends Component {
  render() {
    const { optionOne, optionTwo, answer } = this.props;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    return (
      <Row>
        <Col sm={6}>
          <OptionStats
            text={optionOne.text}
            votes={optionOne.votes.length}
            votePercent={optionOne.votes.length / totalVotes * 100}
            selectedAnswer={answer === 'optionOne'}
          />
        </Col>
        <Col sm={6}>
          <OptionStats
            text={optionTwo.text}
            votes={optionTwo.votes.length}
            votePercent={optionTwo.votes.length / totalVotes * 100}
            selectedAnswer={answer === 'optionTwo'}
          />
        </Col>
      </Row>
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
