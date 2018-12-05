import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Row, Col, PageHeader, Table } from "react-bootstrap";
import LeaderboardEntry from "./LeaderboardEntry";

const Leaderboard = ({ users }) => {
  return (
    <Grid className="main-content">
      <Row>
        <Col sm={12}>
          <PageHeader>Leaderboard</PageHeader>
        </Col>
      </Row>
      <div className="shadow">
        <Table responsive hover className="leaderboard">
          <tbody>
            {Object.keys(users)
              .sort(
                (a, b) =>
                  users[b].questions.concat(Object.keys(users[b].answers))
                    .length -
                  users[a].questions.concat(Object.keys(users[a].answers))
                    .length
              )
              .map((id, index) => (
                <LeaderboardEntry key={id} id={id} rank={index + 1} />
              ))}
          </tbody>
        </Table>
      </div>
    </Grid>
  );
};

Leaderboard.propTypes = {
  users: PropTypes.object.isRequired
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
