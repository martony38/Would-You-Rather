import React from 'react';
import {
  PageHeader,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

// TODO make it nicer
export default function Page404() {
  return (
    <Grid>
      <Row>
        <Col sm={12}>
          <PageHeader>
            404
          </PageHeader>
        </Col>
      </Row>
    </Grid>
  );
};
