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
    const { authedUser, questionIds } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <LoadingBar />
          {authedUser !== null
            ? <div>
                <Nav />
                <UserInfo id={authedUser}/>
                <Switch>
                  <Route exact path='/' component={QuestionList} />
                  <Route exact path='/add' component={NewQuestion} />
                  <Route exact path='/leaderboard' component={Leaderboard} />
                  <Route exact path='/questions/:id' render={({ match }) => {
                    if (questionIds.includes(match.params.id)) {
                      return <Question id={match.params.id}/>
                    } else {
                      return <NoMatch />
                    }
                  }} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            : null}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(App);
