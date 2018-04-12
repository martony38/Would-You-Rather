import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page404 from './Page404';

class NoMatch extends Component {
  render() {
    const { id, answered } = this.props;

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
  const question = questions['04d7hff20vs7mm0cucr9tyd'];

  return {
    id: '04d7hff20vs7mm0cucr9tyd',
    answered: question.optionOne.votes.includes(authedUser)
      ? 'optionOne'
      : question.optionTwo.votes.includes(authedUser)
        ? 'optionTwo'
        : null
  };
}

export default connect(mapStateToProps)(NoMatch);
