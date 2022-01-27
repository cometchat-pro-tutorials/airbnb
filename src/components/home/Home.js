import { useEffect } from 'react';

import bg from '../../images/bg.webp';

import * as uiService from '../../services/ui';

const Home = () => {

  useEffect(() => {
    window.onload = function () {
      uiService.showDarkHeader();
    }
  }, []);

  return (
    <div className="home">
      <img src={bg} alt="bg" />
      <div className="home__title">
        <h1>Could not find the place to go?</h1>
        <h1>Great!</h1>
        <div className="home__button-container">
          <button>Quick Search</button>
        </div>
      </div>
    </div>
  )
};

export default Home;