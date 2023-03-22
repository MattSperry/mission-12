// TeamCard.tsx
import React from 'react';
import './TeamCard.css';

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  const { school, name, city, state } = team;
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>{name}</p>
      <p>{city}, {state}</p>
    </div>
  );
};

export default TeamCard;
