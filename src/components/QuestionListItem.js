import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from './Avatar';

class QuestionListItem extends Component {
  render() {
    const { question } = this.props
    const questionText = `${question.optionOne.text} or ${question.optionTwo.text}`;

    return (
      <Link to={`/questions/${question.id}`}>
        <Avatar id={question.author}/>
        <span>{questionText}</span>
        <span>{question.timestamp}</span>
      </Link>
    );
  }
}

function mapStateToProps ({ questions }, { id }) {
  const question = questions[id];

  return {
    question
  };
}

export default connect(mapStateToProps)(QuestionListItem);
