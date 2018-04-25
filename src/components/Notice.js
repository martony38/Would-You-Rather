import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeNotice } from '../actions/notices';
import { setNoticeListHeight } from '../actions/noticeList';

class Notice extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    notice: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  };

  myRef = React.createRef();

  closeNotice = () => {
    const { dispatch, notice } = this.props;
    const element = this.myRef.current;

    if (element !== null) {
      const noticePosition = element.getBoundingClientRect();
      const noticeListPosition = element.parentElement.getBoundingClientRect();
      let left = noticePosition.left - noticeListPosition.left;

      element.style.position = 'relative';

      const animation = setInterval(flyOut, 2);

      function flyOut() {
        if (left > noticeListPosition.right - noticeListPosition.left + 5) {
          clearInterval(animation);
          // Remove notice from store once animation is done.
          dispatch(removeNotice(notice.id));
        } else {
          left += 5
          element.style.left = left +'px';
        }
      }
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;

    this.myRef.current.addEventListener(
      'animationend',
      () => {
        // Reset height of parent DOM element once animation is done to avoid
        // masking other elements on page.
        dispatch(setNoticeListHeight('auto'));

        // Remove notice after 5 seconds.
        setTimeout(this.closeNotice, 5000);
      }
    );
  }

  render() {
    const { notice } = this.props;

    return (
      <div
        className='notice alert alert-warning'
        ref={this.myRef}
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
