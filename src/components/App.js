import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionList from './QuestionList';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import UserInfo from './UserInfo';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <LoadingBar />
          {authedUser !== null
            ? <div>
                <Nav />
                <UserInfo id={authedUser}/>
                <Switch>
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/questions/:id' component={Question} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            : null}
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
