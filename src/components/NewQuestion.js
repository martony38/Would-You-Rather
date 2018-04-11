import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Option 1'
            value={optionOne}
            name='optionOne'
            onChange={this.handleChange}
          />
          <textarea
            placeholder='Option 2'
            value={optionTwo}
            name='optionTwo'
            onChange={this.handleChange}
          />
          <button
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);