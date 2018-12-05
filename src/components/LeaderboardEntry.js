import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";
import Avatar from "./Avatar";
import goldMedal from "../img/gold-medal.png";
import silverMedal from "../img/silver-medal.png";
import bronzeMedal from "../img/bronze-medal.png";
import defaultMedal from "../img/default-medal.png";

class LeaderboardEntry extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    rank: PropTypes.number.isRequired
  };

  styleMedal(rank) {
    switch (rank) {
      case 1:
        return {
          backgroundImage: `url(${goldMedal})`,
          width: "4.3rem",
          height: "6rem"
        };
      case 2:
        return {
          backgroundImage: `url(${silverMedal})`,
          width: "4rem",
          height: "5.5rem"
        };
      case 3:
        return {
          backgroundImage: `url(${bronzeMedal})`,
          width: "3.6rem",
          height: "5rem"
        };
      default:
        return { backgroundImage: `url(${defaultMedal})` };
    }
  }

  styleAvatar(rank) {
    switch (rank) {
      case 1:
        return { width: "6rem", height: "6rem" };
      case 2:
        return { width: "5.5rem", height: "5.5rem" };
      case 3:
        return { width: "5rem", height: "5rem" };
      default:
        return {};
    }
  }

  render() {
    const { user, rank } = this.props;
    const totQ = user.questions.length;
    const totA = Object.keys(user.answers).length;

    return (
      <tr>
        <td>
          <div className="medal" style={this.styleMedal(rank)}>
            {rank > 3 && rank}
          </div>
        </td>
        <td
          className={
            rank === 1
              ? "leader"
              : rank === 2
              ? "second"
              : rank === 3
              ? "third"
              : ""
          }
        >
          <div style={this.styleAvatar(rank)} className="avatar-container">
            <Avatar id={user.id} />
          </div>
          <span className="leaderboard-user-name">{user.name}</span>
        </td>
        <td>
          {totQ > 0 && (
            <div className="q-and-a-count">
              <Badge className="q-count">{totQ}</Badge>
              {` Question${totQ > 1 ? "s" : ""}`}
            </div>
          )}
          {totA > 0 && (
            <div className="q-and-a-count">
              <Badge className="a-count">{totA}</Badge>
              {` Answer${totA > 1 ? "s" : ""}`}
            </div>
          )}
        </td>
      </tr>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];

  return {
    user
  };
}

export default connect(mapStateToProps)(LeaderboardEntry);
