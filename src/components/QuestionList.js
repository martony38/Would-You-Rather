import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
  state = {
    showAnswered: false
  }

  toggleQuestions = (e) => {
    this.setState((prevState) => {
      return { showAnswered: !prevState.showAnswered }
    });
  };

  render() {
    const questionIds = this.state.showAnswered
      ? this.props.answeredQuestionIds
      : this.props.unansweredQuestionIds

    return (
      <div>
        <div onClick={this.toggleQuestions}>Show Answered/Not Answered</div>
        {/* TODO: Show message 'congrats you answered all questions'*/}
        <ul>
          {questionIds.map((id) => (
            <li key={id}>
              <QuestionListItem id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  const answeredQuestionIds = Object.keys(users[authedUser].answers)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionIds,
    unansweredQuestionIds: Object.keys(questions)
      .filter((question) => !answeredQuestionIds.includes(question))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(QuestionList);