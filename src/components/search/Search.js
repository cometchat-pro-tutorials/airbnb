import { useContext, useRef } from "react";
import { useHistory } from "react-router";

import { Context } from '../../context/AppContext';

import * as storageService from '../../services/storage';
import * as routeService from '../../services/route';
import * as STORAGE_KEYS from '../../constants/storage-keys';
import * as ROUTE from '../../constants/routes';

const Search = () => {
  const { user } = useContext(Context);

  const searchRef = useRef(null);

  const history = useHistory();

  const searchHouses = () => {
    const keywords = searchRef.current.value;
    if (keywords) {
      storageService.save({ key: STORAGE_KEYS.KEYWORD, payload: keywords });
      searchOrReload();
      searchRef.current.value = '';
    }
  };

  const searchOrReload = () => {
    const url = window.location.href;
    if (url.includes(ROUTE.SEARCH)) {
      window.location.reload();
    } else {
      routeService.navigate({ route: ROUTE.SEARCH, push: history.push });
    }
  };

  if (!user) return <></>;

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__form">
          <input type="text" placeholder="Search" ref={searchRef} />
          <div className="search__icon" onClick={searchHouses}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'white', width: '12px', height: '12px', stroke: 'white', strokeWidth: '5.3333', overflow: 'visible' }}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;