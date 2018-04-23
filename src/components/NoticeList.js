import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notice from './Notice';

class NoticeList extends Component {
  render() {
    const { noticeIds } = this.props;

    return (
      <div className='notice-list'>
        {noticeIds.map((id) => (
          <Notice key={id} id={id} />
        ))}
      </div>
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
