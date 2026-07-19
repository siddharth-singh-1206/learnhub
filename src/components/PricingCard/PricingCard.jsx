const PricingCard = ({ name, price, features }) => {
  return (
    <div className="pricing-card">
      <h3 className="pricing-card-name">{name}</h3>
      <div className="pricing-card-price">{price}</div>
      <ul className="pricing-card-features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card-feature-item">
            {feature}
          </li>
        ))}
      </ul>
      <button type="button" className="pricing-card-btn">Choose Plan</button>
    </div>
  );
};

export default PricingCard;
