import React from 'react';
import UserInfo from './UserInfo';

export default function LeaderboardEntry (props) {
  const { id, totalQ, totalA } = props;

  return (
    <div>
      <UserInfo id={id}/>
      # Questions: {totalQ}
      # Answers: {totalA}
    </div>
  );
}
