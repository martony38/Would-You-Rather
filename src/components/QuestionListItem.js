import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { formatDate } from '../utils/helpers';
import Avatar from './Avatar';

class QuestionListItem extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  };

  render() {
    const { question } = this.props
    const questionText = `${question.optionOne.text.substr(0,1).toUpperCase()
      + question.optionOne.text.slice(1,)} or ${question.optionTwo.text}`;

    return (
      <LinkContainer to={`/questions/${question.id}`}>
        <ListGroupItem
          header={
            <h4>
              <div className='avatar-container question-list-avatar'>
                <Avatar id={question.author}/>
              </div>
              <span>{questionText}?</span>
            </h4>}
        >
          <span className='time-stamp'>asked at {formatDate(question.timestamp)} by {question.author}</span>
        </ListGroupItem>
      </LinkContainer>
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
