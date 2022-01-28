import { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router';

import ProfileHouse from './ProfileHouse';

import * as firebaseService from '../../services/firebase';
import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';
import * as uiService from '../../services/ui';

import * as FIREBASE_KEYS from '../../constants/firebase-keys';
import * as ROUTES from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const ProfileHouses = ({ profile }) => {
  const [houses, setHouses] = useState([]);

  const housesRef = useRef(firebaseService.getRef(FIREBASE_KEYS.HOUSES));
  const tempRef = housesRef.current;

  const history = useHistory();

  const loadHouses = useCallback(() => {
    firebaseService.getDataRealtimeQuery({ ref: housesRef, query: FIREBASE_KEYS.CREATED_BY, criteria: profile.id, callback: onDataLoaded });
  }, [housesRef, profile]);

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

  const onItemClicked = house => () => {
    uiService.showLightHeader();
    storageService.save({ key: STORAGE_KEYS.HOUSE, payload: JSON.stringify(house) });
    routeService.navigate({ route: ROUTES.DETAIL, push: history.push });
  };

  if (!houses || !houses.length) return <></>;

  return (
    <div className="profile__houses">
      {houses.map(house => <ProfileHouse house={house} onItemClicked={onItemClicked} />)}
    </div>
  );
};

export default ProfileHouses;