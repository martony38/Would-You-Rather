import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notice from './Notice'

class NoticeList extends Component {
  render() {
    const { noticeIds } = this.props;

    return (
      <ul>
        {noticeIds.map((id) => (
          <li key={id}>
            <Notice id={id} />
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps ({ notices }) {
  const noticeIds = Object.keys(notices)

  return {
    noticeIds
  };
}

export default connect(mapStateToProps)(NoticeList);
