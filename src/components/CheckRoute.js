import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import NoMatch from './NoMatch';


class CheckRoute extends Component {
  render() {
    const { questionIds, id } = this.props;

    return (
      // If url does not contain a valid question id, display 404 page.
      questionIds.includes(id)
        ? <Question id={id}/>
        : <NoMatch />
    );
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;

  return {
    id,
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(CheckRoute);
