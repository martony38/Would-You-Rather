import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import OptionStats from "./OptionStats";

export default function QuestionStats({ qid }) {
  return (
    <Row>
      <Col sm={5}>
        <OptionStats qid={qid} option="optionOne" />
      </Col>
      <Col sm={2} className="text-center">
        <div className="answers-divider">or</div>
      </Col>
      <Col sm={5}>
        <OptionStats qid={qid} option="optionTwo" />
      </Col>
    </Row>
  );
}

QuestionStats.propTypes = {
  qid: PropTypes.string.isRequired
};
