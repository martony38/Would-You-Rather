import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page404 from './Page404';

const QUESTION_404 = '04d7hff20vs7mm0cucr9tyd';

class NoMatch extends Component {
  render() {
    const { id, answered, authenticated } = this.props;

    if (!authenticated) {
      return <Page404 />
    }

    switch(answered) {
      case 'optionOne' :
        return <Page404 />
      case 'optionTwo' :
        return <Redirect to='/' />
      default :
        return <Redirect to={`/questions/${id}`} />
    }
  }
}

function mapStateToProps ({ authedUser, questions }) {
  const question = questions[QUESTION_404];

  return {
    authenticated: authedUser !== null ? true : false,
    id: QUESTION_404,
    answered: question && question.optionOne.votes.includes(authedUser)
      ? 'optionOne'
      : question && question.optionTwo.votes.includes(authedUser)
        ? 'optionTwo'
        : null
  };
}

export default connect(mapStateToProps)(NoMatch);
