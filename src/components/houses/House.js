import { useHistory } from 'react-router';

import * as storageService from '../../services/storage';
import * as routeService from '../../services/route';

import * as STORAGE_KEYS from '../../constants/storage-keys';
import * as ROUTE from '../../constants/routes';

const House = ({ house }) => {
  const history = useHistory();
  
  const chatWithHost = () => {
    const host = house.createdBy;
    if (host) {
      storageService.save({ key: STORAGE_KEYS.HOST, payload: host });
      routeService.navigate({ route: ROUTE.HOST, push: history.push });
    }
  };

  if (!house) return <></>;

  return (
    <div className="house">
      <img src={house.image} alt="house"/>
      <div className="house__info">
        <p>{house.name}</p>
        <p>{house.price}$/night</p>
        <p>{house.description}</p>
        <button onClick={chatWithHost}>Chat with Host</button>
      </div>
    </div>
  );
};

export default House;