import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notice from './Notice';

class NoticeList extends Component {
  static propTypes = {
    noticeIds: PropTypes.array.isRequired,
    height: PropTypes.string.isRequired
  };

  render() {
    const { noticeIds, height } = this.props;

    return (
      <div className='notice-list' style={{ height }}>
        {noticeIds.map((id) => (
          <Notice key={id} id={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps ({ notices, noticeList }) {
  const noticeIds = Object.keys(notices)
  const height = noticeList.height

  return {
    noticeIds,
    height
  };
}

export default connect(mapStateToProps)(NoticeList);
