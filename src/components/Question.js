import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import Answer from './Answer';
import QuestionStats from './QuestionStats'

class Question extends Component {
  render() {
    const { author, optionOne, optionTwo, id } = this.props.question;
    const { answered } = this.props;

    return (
      <div>
        <Avatar id={author} />
        {answered === null
          ? <Answer qid={id} optionOne={optionOne.text} optionTwo={optionTwo.text}/>
          : <QuestionStats qid={id} answer={answered}/>}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, questions } , { id } ) {
  const question = questions[id];

  return {
    question,
    answered: question.optionOne.votes.includes(authedUser)
      ? 'optionOne'
      : question.optionTwo.votes.includes(authedUser)
        ? 'optionTwo'
        : null
  };
}

export default connect(mapStateToProps)(Question);