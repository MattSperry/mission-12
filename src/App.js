// App.js
import React from 'react';
import Header from './Header';
import TeamCard from './TeamCard';
import teamsData from './teams.json';

const TeamList = () => {
  return (
    <div>
      {teamsData.map(team => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <TeamList />
    </div>
  );
};

export default App;
