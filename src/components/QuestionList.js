import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, PageHeader, Grid, Row, Col, ListGroup } from "react-bootstrap";
import QuestionListItem from "./QuestionListItem";

class QuestionList extends Component {
  static propTypes = {
    answeredQuestionIds: PropTypes.array.isRequired,
    unansweredQuestionIds: PropTypes.array.isRequired
  };

  state = {
    showAnswered: false
  };

  toggleQuestions = e => {
    this.setState(prevState => {
      return { showAnswered: !prevState.showAnswered };
    });
  };

  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;
    const { showAnswered } = this.state;
    const questionIds = showAnswered
      ? answeredQuestionIds
      : unansweredQuestionIds;

    return (
      <Grid className="main-content">
        <Row>
          <Col sm={12}>
            <PageHeader>
              Questions {showAnswered ? "answered" : "not answered"}
              <Button
                bsStyle="warning"
                className="toggle-answers btn-shadow"
                type="submit"
                onClick={this.toggleQuestions}
              >
                Show {showAnswered ? "not answered" : "answered"}
              </Button>
            </PageHeader>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            {questionIds.length > 0 ? (
              <ListGroup className="shadow">
                {questionIds.map(id => (
                  <QuestionListItem key={id} id={id} />
                ))}
              </ListGroup>
            ) : showAnswered ? (
              "You have not answered any questions yet."
            ) : (
              "Congratulations you have answered all the questions."
            )}
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestionIds = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    answeredQuestionIds,
    unansweredQuestionIds: Object.keys(questions)
      .filter(question => !answeredQuestionIds.includes(question))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(QuestionList);
