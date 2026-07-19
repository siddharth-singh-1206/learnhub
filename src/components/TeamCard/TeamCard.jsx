const TeamCard = ({ name, role, avatar: AvatarIcon }) => {
  return (
    <div className="team-card">
      <AvatarIcon className="team-card-avatar" />
      <h3 className="team-card-name">{name}</h3>
      <p className="team-card-role">{role}</p>
    </div>
  );
};

export default TeamCard;
