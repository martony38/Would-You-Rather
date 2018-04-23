import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import Answer from './Answer';
import QuestionStats from './QuestionStats';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

class Question extends Component {
  render() {
    const { author, optionOne, optionTwo, id } = this.props.question;
    const { answered, authorName } = this.props;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <PageHeader className='text-center'>
              <div className='avatar-container question-avatar'>
                <Avatar id={author}/>
              </div>
              <div><small>{authorName}</small></div>
              <div>wants to know if you would rather...</div>
            </PageHeader>
          </Col>
        </Row>
        {answered === null
          ? <Answer qid={id} optionOne={optionOne.text} optionTwo={optionTwo.text}/>
          : <QuestionStats qid={id} answer={answered}/>}
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
      ? 'optionOne'
      : question.optionTwo.votes.includes(authedUser)
        ? 'optionTwo'
        : null
  };
}

export default connect(mapStateToProps)(Question);
