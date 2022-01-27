import House from './House';

const Houses = ({ houses }) => {
  if (!houses || !houses.length) return <></>;

  return (
    <div className="houses">
      {houses.map(house => <House key={house.id} house={house} />)}
    </div>
  );
};

export default Houses;