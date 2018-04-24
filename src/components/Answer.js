import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import {
  Button,
  Row,
  Col
} from 'react-bootstrap';

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
      <Fragment>
        <Row>
          <Col sm={5}>
            <Button block
              className='btn-answer btn-shadow'
              bsStyle={answer === 'optionOne' ? 'success' : 'default'}
              disabled={answer === 'optionOne'}
              bsSize='large'
              name='answer'
              value='optionOne'
              onClick={this.answerQuestion}
            >
              {optionOne.substr(0,1).toUpperCase() + optionOne.slice(1,)}
            </Button>
          </Col>
          <Col sm={2} className='text-center'>
            <div className='answers-divider'>or</div>
          </Col>
          <Col sm={5}>
            <Button block
              className='btn-answer btn-shadow'
              bsStyle={answer === 'optionTwo' ? 'success' : 'default'}
              disabled={answer === 'optionTwo'}
              bsSize='large'
              name='answer'
              value='optionTwo'
              onClick={this.answerQuestion}
            >
              {optionTwo.substr(0,1).toUpperCase() + optionTwo.slice(1,)}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Button block
              className='btn-answer btn-shadow'
              bsSize='large'
              bsStyle='primary'
              onClick={this.handleSubmit}
              type='submit'
              disabled={answer === null}
            >
              Submit Answer
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default connect()(Answer);
