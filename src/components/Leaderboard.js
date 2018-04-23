import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardEntry from './LeaderboardEntry';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Table
} from 'react-bootstrap';

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <PageHeader>
              Leaderboard
            </PageHeader>
          </Col>
        </Row>
        <div className='shadow'>
          <Table responsive hover className='leaderboard'>
            <tbody>
              {Object.keys(users)
                .sort((a,b) => (
                  users[b].questions.concat(Object.keys(users[b].answers)).length
                  - users[a].questions.concat(Object.keys(users[a].answers)).length
                ))
                .map((id, index) => (
                  <LeaderboardEntry key={id} id={id} rank={index + 1}/>
                ))}
            </tbody>
          </Table>
        </div>
      </Grid>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);