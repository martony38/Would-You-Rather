import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button
} from 'react-bootstrap';

export default function SignInButton() {
  return (
    <LinkContainer to='/login'>
      <Button bsStyle='success'>
        Sign in
      </Button>
    </LinkContainer>
  );
};
