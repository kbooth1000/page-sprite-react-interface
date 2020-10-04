import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga";
import Rabbit from './Rabbit';
import Comet from './Comet2';
import WeatherAnimations from './WeatherAnimations';
import '../css/App.css';

const PageGrid = props => {

  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize('UA-179485479-1');
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location]);

  let pages = props.jsonPageData.pages.map(page => (
    <div
      key={page._id}
      className={
        'page c-' +
        page._id +
        (page._id === props.activePage ? ' active' : '')
      }
    >
      <h2 className="page-title">{page.title && page.title}</h2>
      <h4 className="page-content">{page.description && page.description}</h4>
      {page.content && page.content}
      {page.component && page.component === 'Rabbit' && <Rabbit />}
      {page.component && page.component === 'Comet' && <Comet />}
      {page.component && page.component === 'WeatherAnimations' && <WeatherAnimations />}
    </div>
  ));
  return pages;

}

export default PageGrid;
