const HouseDetailImages = ({ house }) => {
  return (
    <div className="house-detail__images">
      <div className="house-detail__images-left">
        <img src={house.image} alt={house.name} />
      </div>
      <div className="house-detail__images-right">
        <img src={house.image} alt={house.name} />
        <img src={house.image} alt={house.name} />
        <img src={house.image} alt={house.name} />
        <img src={house.image} alt={house.name} />
      </div>
    </div>
  );
};

export default HouseDetailImages;