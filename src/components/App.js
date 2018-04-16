import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionList from './QuestionList';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import UserInfo from './UserInfo';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import CheckRoute from './CheckRoute';
import Logout from './Logout';
import NewUser from './NewUser';

class App extends Component {
  render() {
    const { authedUser } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <LoadingBar />
          <Nav />
          {authedUser !== null &&
            <Fragment>
              <UserInfo id={authedUser}/>
              <Logout />
            </Fragment>}
          <Switch>
            <PrivateRoute exact path='/' component={QuestionList} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={NewUser} />
            <PrivateRoute exact path='/add' component={NewQuestion} />
            <PrivateRoute exact path='/leaderboard' component={Leaderboard} />
            <PrivateRoute exact path='/questions/:id' component={CheckRoute}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
