import { useState, useEffect } from 'react';

import House from './House';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const Houses = ({ houses }) => {
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    const keyword = storageService.get(STORAGE_KEYS.KEYWORD);
    if (keyword) {
      setKeyword(() => keyword);
    }
  }, []);

  if (!houses || !houses.length) return <></>;

  return (
    <div className="houses">
      {houses.map(house => <House key={house.id} house={house} keyword={keyword} />)}
    </div>
  );
};

export default Houses;