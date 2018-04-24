import React from 'react';
import { Row, Col } from 'react-bootstrap';
import OptionStats from './OptionStats';

export default function QuestionStats(props) {
  return (
    <Row>
      <Col sm={6}>
        <OptionStats
          qid={props.qid}
          option='optionOne'
        />
      </Col>
      <Col sm={6}>
        <OptionStats
          qid={props.qid}
          option='optionTwo'
        />
      </Col>
    </Row>
  );
};
