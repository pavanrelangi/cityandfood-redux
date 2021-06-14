import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Citydetails.scss';

const Citydetails = ({ name, imageUrl, size, history, match }) => (

    <Link to="/foods">
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{name}</h1>
      <span className='subtitle'>Click for Food</span>
    </div>
  </div>
  </Link>
);

export default withRouter(Citydetails);
