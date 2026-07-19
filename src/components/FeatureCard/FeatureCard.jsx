const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-icon-wrapper">
        <Icon className="feature-card-icon" />
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-desc">{description}</p>
    </div>
  );
};

export default FeatureCard;
