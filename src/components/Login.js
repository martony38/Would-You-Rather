import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/shared';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  PageHeader,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;

    dispatch(handleLogin(username, password));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.authedUser !== null) {
      return <Redirect to={from} />
    }

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader>
              Please login
            </PageHeader>
          </Col>
        </Row>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl
                type='text'
                name='username'
                value={username}
                placeholder='username'
                autoComplete='username'
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type='password'
                name='password'
                value={password}
                placeholder='password'
                autoComplete='current-password'
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button block
                className='btn-shadow'
                type='submit'
                bsStyle="success"
                disabled={username === '' || password === ''}
              >
                Login
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
