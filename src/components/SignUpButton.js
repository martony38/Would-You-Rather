import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button
} from 'react-bootstrap';

export default function SignUpButton() {
  return (
    <LinkContainer to='/register'>
      <Button bsStyle='primary'>
        Sign up
      </Button>
    </LinkContainer>
  );
};
