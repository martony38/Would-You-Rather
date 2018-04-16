import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to='/' exact activeClassName='active'>
        Home /
      </NavLink>
      <NavLink to='/leaderboard' activeClassName='active'>
        / Leaderboard /
      </NavLink>
      <NavLink to='/add' activeClassName='active'>
        / Add a Question
      </NavLink>

      {/* Links to test 404 page functionality */}
      <NavLink to='/nowhere' activeClassName='active'>
        / Link to Nowhere
      </NavLink>
      <NavLink to='/questions/doesnotexist' activeClassName='active'>
        / Link to non existing question
      </NavLink>
    </nav>
  );
};