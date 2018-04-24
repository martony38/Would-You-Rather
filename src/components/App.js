import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionList from './QuestionList';
import LoadingBar from 'react-redux-loading-bar';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import CheckRoute from './CheckRoute';
import NewUser from './NewUser';
import NoticeList from './NoticeList';
import NavMenu from './NavMenu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavMenu />
          <Switch>
            <PrivateRoute exact path='/' component={QuestionList} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={NewUser} />
            <PrivateRoute exact path='/add' component={NewQuestion} />
            <PrivateRoute exact path='/leaderboard' component={Leaderboard} />
            <PrivateRoute exact path='/questions/:id' component={CheckRoute}/>
            <Route component={NoMatch} />
          </Switch>
          <LoadingBar showFastActions className='loading-bar'/>
          <NoticeList />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
