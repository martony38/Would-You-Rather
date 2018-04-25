import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Avatar from './Avatar';
import Answer from './Answer';
import QuestionStats from './QuestionStats';

class Question extends Component {
  static propTypes = {
    answered: PropTypes.bool.isRequired,
    authorName: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  };

  render() {
    const {
      answered,
      authorName,
      question: { author, optionOne, optionTwo, id }
    } = this.props;

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader className='text-center'>
              <div className='avatar-container question-avatar'>
                <Avatar id={author}/>
              </div>
              <div><small>{authorName}</small></div>
              <div>wants to know if you would rather...</div>
            </PageHeader>
          </Col>
        </Row>
        {answered
          ? <QuestionStats qid={id}/>
          : <Answer
              qid={id}
              optionOne={optionOne.text}
              optionTwo={optionTwo.text}
            />}
      </Grid>
    );
  }
}

function mapStateToProps ({ authedUser, questions, users }, { id } ) {
  const question = questions[id];
  const authorName = users[question.author].name

  return {
    question,
    authorName,
    answered: question.optionOne.votes.includes(authedUser)
      || question.optionTwo.votes.includes(authedUser)
  };
}

export default connect(mapStateToProps)(Question);
