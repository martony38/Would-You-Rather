import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

class Answer extends Component {
  state = {
    answer: null
  }

  answerQuestion = (e) => {
    this.setState({ answer: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, qid } = this.props;

    dispatch(handleAnswerQuestion(qid, this.state.answer));
  }

  render() {
    const { optionOne, optionTwo } = this.props;
    const { answer } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Would you rather:</p>
        <div>
          <input
            type='radio'
            id='optionOne'
            name='answer'
            value='optionOne'
            onClick={this.answerQuestion} />
          <label htmlFor='optionOne'>{optionOne} or </label>
          <input
            type='radio'
            id='optionTwo'
            name='answer'
            value='optionTwo'
            onClick={this.answerQuestion} />
          <label htmlFor='optionTwo'>{optionTwo} ?</label>
        </div>
        <div>
          <button type='submit' disabled={answer === null}>Submit Answer</button>
        </div>
      </form>
    );
  }
}

export default connect()(Answer);
