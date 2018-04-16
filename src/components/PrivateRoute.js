import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { authedUser, component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={(props) => (
        authedUser !== null
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
      )} />
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(PrivateRoute);
