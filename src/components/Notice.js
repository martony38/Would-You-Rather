import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeNotice } from '../actions/notices';

class Notice extends Component {
  closeNotice = (e) => {
    const { dispatch, notice } = this.props;
    const element = e.target.parentElement
    const noticePosition = element.getBoundingClientRect();
    const noticeListPosition = element.parentElement.getBoundingClientRect();
    let left = noticePosition.left - noticeListPosition.left;
    element.style.position = "relative";

    const animation = setInterval(flyOut, 2);

    function flyOut() {
      if (left > noticeListPosition.right - noticeListPosition.left + 5) {
        clearInterval(animation);
        dispatch(removeNotice(notice.id));
      } else {
        left += 5
        element.style.left = left +'px';
      }
    }
  }

  render() {
    const { notice } = this.props;
    this.noticeElement = React.createRef();

    return (
      <div
        className='notice alert alert-warning'
      >
        <div className='notice-text'>{notice.text}</div>
        <div className='close-button' onClick={this.closeNotice}></div>
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
