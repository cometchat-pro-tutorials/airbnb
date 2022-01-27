import { useState, useEffect, useCallback } from 'react';

import HouseDetailDescription from './HouseDetailDescription';
import HouseDetailForm from './HouseDetailForm';
import HouseDetailImages from './HouseDetailImages';
import HouseDetailName from './HouseDetailName';
import HouseDetailSub from './HouseDetailSub';

import * as uiService from '../../services/ui';
import * as storageService from '../../services/storage';

import * as STORAGE_KEYS from '../../constants/storage-keys';

const HouseDetail = () => {
  const [house, setHouse] = useState(null);

  const loadHouse = useCallback(() => {
    const house = JSON.parse(storageService.get(STORAGE_KEYS.HOUSE));
    if (house) {
      setHouse(() => house);
    }
  }, []);

  useEffect(() => {
    window.onload = function () {
      uiService.showLightHeader();
    }
    loadHouse();
  }, [loadHouse]);

  if (!house) return <></>;

  return (
    <div className="house-detail">
      <HouseDetailName house={house} />
      <HouseDetailSub house={house} />
      <HouseDetailImages house={house} />
      <div className="house-detail__body">
        <HouseDetailDescription house={house} />
        <HouseDetailForm house={house} />
      </div>
    </div>
  );
};

export default HouseDetail;