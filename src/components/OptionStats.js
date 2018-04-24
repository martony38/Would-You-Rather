import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import Avatar from './Avatar';

class OptionStats extends Component {
  render() {
    const { authedUser, text, votes, votePercent, selectedAnswer } = this.props;

    return (
      <Panel
        className='text-center option-stats'
        bsStyle={selectedAnswer === true ? 'success' : 'danger'}
      >
        <Panel.Heading>
          <Panel.Title className='option-title'>
            {text.substr(0,1).toUpperCase() + text.slice(1,)}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div>{`${votes} vote${votes === 1 ? '' : 's'}`}</div>
          <div>{votePercent} %</div>
          {selectedAnswer === true &&
            <div className="avatar-container">
              <Avatar id={authedUser}/>
            </div>}
        </Panel.Body>
      </Panel>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(OptionStats);
