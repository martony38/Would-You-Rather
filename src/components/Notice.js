import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeNotice } from '../actions/notices';

class Notice extends Component {
  closeNotice = (e) => {
    const { dispatch, notice } = this.props;

    dispatch(removeNotice(notice.id));
  }

  render() {
    const { notice } = this.props;

    return (
      <div>
        <span>{notice.text}</span>
        <span onClick={this.closeNotice}>X</span>
      </div>
    );
  }
}

function mapStateToProps ({ notices }, { id }) {
  const notice = notices[id];

  return {
    notice
  };
}

export default connect(mapStateToProps)(Notice);
