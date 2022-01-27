import { useState, useEffect, useRef, useCallback } from 'react';

import Houses from '../houses/Houses';

import * as uiService from '../../services/ui';
import * as FIREBASE_KEYS from '../../constants/firebase-keys';
import * as firebaseService from '../../services/firebase';
import * as STORAGE_KEYS from '../../constants/storage-keys';
import * as storageService from '../../services/storage';

const SearchResults = () => {
  const [houses, setHouses] = useState();

  const housesRef = useRef(firebaseService.getRef(FIREBASE_KEYS.HOUSES));
  const tempRef = housesRef.current;

  const loadHouses = useCallback(keywords => {
    firebaseService.getDataRealtimeQuery({ ref: housesRef, query: FIREBASE_KEYS.ADDRESS, criteria: keywords, callback: onDataLoaded });
  }, [housesRef]);

  const onDataLoaded = val => {
    if (val) {
      const keys = Object.keys(val);
      const data = keys.map(key => val[key]);
      setHouses(() => data);
    }
  };

  useEffect(() => {
    const keywords = storageService.get(STORAGE_KEYS.KEYWORD);
    if (keywords) {
      loadHouses(keywords);
    }
  }, [loadHouses]);

  useEffect(() => {
    return () => {
      setHouses(() => []);
      tempRef.off();
    };
  }, [tempRef]);

  useEffect(() => {
    window.onload = function () {
      uiService.showLightHeader();
    }
  }, []);

  return (
    <div className="search-results">
      <Houses houses={houses} />
    </div>
  );
};

export default SearchResults;