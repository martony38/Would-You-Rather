import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";
import Avatar from "./Avatar";

class OptionStats extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    voters: PropTypes.array.isRequired,
    votePercent: PropTypes.number.isRequired,
    selectedAnswer: PropTypes.bool.isRequired,
    qid: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired
  };

  render() {
    const { text, votes, voters, votePercent, selectedAnswer } = this.props;

    return (
      <Panel
        className="text-center option-stats"
        bsStyle={selectedAnswer === true ? "success" : "danger"}
      >
        <Panel.Heading>
          <Panel.Title className="option-title">
            {text.substr(0, 1).toUpperCase() + text.slice(1)}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div>{`${votes} vote${votes === 1 ? "" : "s"}`}</div>
          <div>{votePercent.toFixed()} %</div>
          {voters.map(voter => (
            <div key={voter} className="avatar-container">
              <Avatar id={voter} />
            </div>
          ))}
        </Panel.Body>
      </Panel>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { qid, option }) {
  const question = questions[qid];
  const text = question[option].text;
  const votes = question[option].votes.length;
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const votePercent = (question[option].votes.length / totalVotes) * 100;
  const selectedAnswer = question[option].votes.includes(authedUser);
  const voters = question[option].votes;

  return {
    text,
    votes,
    votePercent,
    selectedAnswer,
    voters
  };
}

export default connect(mapStateToProps)(OptionStats);
