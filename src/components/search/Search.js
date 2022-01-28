import { useState, useContext, useRef } from "react";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Context } from '../../context/AppContext';

import * as ROUTE from '../../constants/routes';
import * as routeService from '../../services/route';
import * as STORAGE_KEYS from '../../constants/storage-keys';
import * as storageService from '../../services/storage';
import * as uiService from '../../services/ui';

const Search = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { user } = useContext(Context);

  const searchRef = useRef(null);

  const history = useHistory();

  const searchHouses = () => {
    const keywords = searchRef.current.value;
    if (keywords) {
      storageService.save({ key: STORAGE_KEYS.KEYWORD, payload: keywords });
      searchOrReload();
      clearForm();
    }
  };

  const searchOrReload = () => {
    const url = window.location.href;
    if (url.includes(ROUTE.SEARCH)) {
      window.location.reload();
    } else {
      uiService.showLightHeader();
      routeService.navigate({ route: ROUTE.SEARCH, push: history.push });
    }
  };

  const clearForm = () => {
    searchRef.current.value = '';
    setStartDate(null);
    setEndDate(null);
  };

  if (!user) return <></>;

  return (
    <div id="search" className="search">
      <div id="search-container" className="search__container">
        <div className="search__form">
          <div className="search__form-input search__form-element">
            <span>Location</span>
            <input type="text" placeholder="Where will you go?" ref={searchRef} />
          </div>
          <div className="search__form-start-date search__form-element">
            <span>Start Date</span>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="search__form-end-date search__form-element">
            <span>End Date</span>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </div>
          <div className="search__icon" onClick={searchHouses}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'white', width: '12px', height: '12px', stroke: 'white', strokeWidth: '5.3333', overflow: 'visible' }}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;