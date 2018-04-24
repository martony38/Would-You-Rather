import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormGroup,
  Row,
  Grid,
  Col,
  Form,
  PageHeader
} from 'react-bootstrap';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    });
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader>
              Add a new question
            </PageHeader>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h2 className='text-center'>Would you rather...</h2>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={5}>
              <FormGroup>
                <FormControl
                  className='text-center'
                  componentClass='textarea'
                  placeholder='Enter text of first option here'
                  value={optionOne}
                  name='optionOne'
                  onChange={this.handleChange}
                  rows='2'
                />
              </FormGroup>
            </Col>
            <Col sm={2} className='text-center'>
              <div className='new-question-divider'>or</div>
            </Col>
            <Col sm={5}>
              <FormGroup>
                <FormControl
                  className='text-center'
                  componentClass='textarea'
                  placeholder='Enter text of second option here'
                  value={optionTwo}
                  name='optionTwo'
                  onChange={this.handleChange}
                  rows='2'
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button block
                bsStyle='primary'
                className='btn-shadow'
                type='submit'
                disabled={optionOne === '' || optionTwo === ''}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Grid>
    );
  }
}

export default connect()(NewQuestion);