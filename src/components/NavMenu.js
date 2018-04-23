import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  FormGroup
 } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Avatar from './Avatar';
import SignOutButton from './SignOutButton';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

class NavMenu extends Component {
  render() {
    const { user, location } = this.props;

    return (
      <Navbar className='no-round-corner' inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
              Would you rather...
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/leaderboard'>
              <NavItem>
                Leaderboard
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/add'>
              <NavItem>
                Add a question
              </NavItem>
            </LinkContainer>
            {/* Links to test 404 page functionality
            <LinkContainer to='/nowhere'>
              <NavItem>
                Link to Nowhere
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/questions/doesnotexist'>
              <NavItem>
                Link to non existing question
              </NavItem>
            </LinkContainer>
            */}
          </Nav>
          {user === null
            ? <Navbar.Form pullRight>
                {location.pathname === '/register' ? <SignInButton /> : <SignUpButton />}
              </Navbar.Form>
            : <Navbar.Form pullRight className='navbar-user-info'>
                <FormGroup className='user-info'>
                  <div className='avatar-container'>
                    <Avatar id={user.id}/>
                  </div>
                  <div className='navbar-text no-float user-info'>{user.name}</div>
                </FormGroup>
                <SignOutButton />
              </Navbar.Form>}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  const user = users[authedUser] || null;

  return {
    user
  };
}

export default withRouter(connect(mapStateToProps)(NavMenu));
