import React from 'react';

import Citydetails from '../Citydetails/Citydetails';

import './Citydata.scss';

class Citydata extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
      "id": 1,
      "name": "Hyderabad",
      "imageUrl": "https://images.yourstory.com/cs/2/01f48b20-d5e9-11e8-99be-731e1ddbc52d/Hyderabad_Innovation_Center-011561445811570.png"
    },
    {
      "id": 2,
      "name": "Chennai",
      "pav": "https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/Chennai-Central,-formerly-Madras-Central,-is-the-main-railway-terminus-in-the-city-of-Chennai,-India.-It-is-one-of-the-most-important-hubs-in-the-South..jpg"

     , "imageUrl": "https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/Chennai-Central,-formerly-Madras-Central,-is-the-main-railway-terminus-in-the-city-of-Chennai,-India.-It-is-one-of-the-most-important-hubs-in-the-South..jpg"
    },
    {
      "id": 3,
      "name": "Banglore",
      "imageUrl": "https://5.imimg.com/data5/YM/JQ/ZB/SELLER-10391908/banglore-mysore-tour-500x500.jpg"
    },
    {
      "id": 4,
      "name": "Kerala  ",
      "imageUrl": "https://images.financialexpress.com/2021/01/Kottayam-houseboats-kerala-tourism.jpg"
    }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Citydetails key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Citydata;
