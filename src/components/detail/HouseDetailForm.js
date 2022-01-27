import { useHistory } from 'react-router';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

import * as routeService from '../../services/route';
import * as ROUTES from '../../constants/routes';

import * as uiService from '../../services/ui';

const HouseDetailForm = ({ house }) => {
  const history = useHistory();

  const book = () => {
    alert('Booked successfully!');
  };

  const chatWithHost = () => {
    uiService.showLightHeader();
    storageService.save({ key: STORAGE_KEYS.HOST, payload: house.createdBy });
    routeService.navigate({ route: ROUTES.HOST, push: history.push });
  };

  return (
    <div className="house-detail-form">
      <div className="house-detail-form__header">
        <div className="house-detail-form__price">
          <span className="house-detail-form__price-value">{house.price}$</span>
          <span> / night</span>
        </div>
        <div className="house-detail-form__rating">
          <div className="house-detail__rating">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: "14px", width: "14px" }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
            <span>4.82</span>
          </div>
        </div>
      </div>
      <div className="house-detail-form__actions">
        <button onClick={book}>Book</button>
        <span>Or</span>
        <button onClick={chatWithHost}>Chat with Host</button>
      </div>
    </div>
  );
};

export default HouseDetailForm;