import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';
import NoMatch from './NoMatch';

const CheckRoute = ({ questionIds, id }) => {
  return (
    // If url does not contain a valid question id, display 404 page.
    questionIds.includes(id)
      ? <Question id={id}/>
      : <NoMatch />
  );
};

CheckRoute.propTypes = {
  questionIds: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

function mapStateToProps({ questions }, { match }) {
  const { id } = match.params;

  return {
    id,
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(CheckRoute);
