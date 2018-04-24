import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../actions/users';
import { Redirect } from 'react-router-dom';
import {
  Col,
  FormGroup,
  Button,
  HelpBlock,
  ControlLabel,
  FormControl,
  Form,
  Grid,
  Row,
  PageHeader
} from 'react-bootstrap';

class NewUser extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    verifyPassword: '',
    avatar: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, username, password, avatar } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddUser({ name, username, password, avatar: avatar.url }));
  }

  validatePassword() {
    const { password, verifyPassword } = this.state;
    if (password !== '' && verifyPassword !== '' && password !== verifyPassword) {
      return 'error'
    }
  }

  handleAvatar = (e) => {
    const avatarFile = e.target.files[0]
    this.setState({
      avatar: {
        url: URL.createObjectURL(avatarFile),
        file: avatarFile
      }
    });
  }

  render() {
    const { name, username, password, verifyPassword, avatar } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.authedUser !== null) {
      return <Redirect to={from} />
    }

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <PageHeader>
              Register
            </PageHeader>
          </Col>
        </Row>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl
                placeholder='John Doe'
                autoComplete='name'
                value={name}
                name='name'
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Avatar
            </Col>
            <Col sm={10}>
              {/*<FormControl type='file' accept='.png, .jpg, .jpeg'/>*/}
              <label className='btn btn-success btn-shadow btn-file'>
                {avatar !== '' ? 'Select another...' : 'Browse...'}
                <input
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  style={{display: 'none'}}
                  onChange={this.handleAvatar}
                />
              </label>
              <HelpBlock>{avatar !== '' ? 'Image selected: ' + avatar.file.name : 'Upload an image as your Avatar. Only accept .png, .jpg, and .jpeg files.'}</HelpBlock>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl
                placeholder='Username'
                autoComplete='username'
                value={username}
                name='username'
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup validationState={this.validatePassword()}>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type='password'
                placeholder='Password'
                autoComplete='new-password'
                value={password}
                name='password'
                onChange={this.handleChange}
              />
              <FormControl
                className='verify-password'
                type='password'
                placeholder='Verify Password'
                autoComplete='new-password'
                value={verifyPassword}
                name='verifyPassword'
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button block
                bsStyle='primary'
                className='btn-shadow'
                type='submit'
                disabled={username === ''
                  || password === ''
                  || name === ''
                  || verifyPassword === ''
                  || password !==  verifyPassword}
              >
                Sign Up
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

export default connect(mapStateToProps)(NewUser);
