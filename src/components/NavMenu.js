import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup
 } from 'react-bootstrap';
import Avatar from './Avatar';
import SignOutButton from './SignOutButton';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

class NavMenu extends Component {
  static propTypes = {
    user: PropTypes.object,
    location: PropTypes.object.isRequired
  };

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
                Add question
              </NavItem>
            </LinkContainer>
            {/* Links to test 404 page functionality */}
              <NavDropdown title='404' id='bad-links-dropdown'>
                <LinkContainer to='/wrong-url'>
                  <MenuItem>Wrong link</MenuItem>
                </LinkContainer>
                <LinkContainer to='/questions/doesnotexist'>
                  <MenuItem>Bad qid</MenuItem>
                </LinkContainer>
              </NavDropdown>
          </Nav>
          {user === null
            ? <Navbar.Form pullRight>
                {location.pathname !== '/login' ? <SignInButton /> : <SignUpButton />}
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
