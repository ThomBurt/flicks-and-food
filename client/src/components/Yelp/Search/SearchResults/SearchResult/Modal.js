import './Modal.css';
// import { Icon } from 'semantic-ui-react';

import React from 'react';
//import { Icon } from 'semantic-ui-react';

export function Modal({ open, children, onClose, props }) {
  if (!open) return null;

  const { name, location, rating, phone, url, image_url } = props;

  const address = `${location.address1}, ${location.city} ${location.state} ${location.zip_code}`;
  const placeholderImg = image_url
    ? image_url
    : 'https://via.placeholder.com/250';




  return (
    <div className="modal-styles">
      <button onClick={onClose} className="close-button">
        {/* <Icon name="close" /> */}
        X
      </button>

      <div className="business-info-div">
        <img src={placeholderImg} className="business-img" alt="business" />

        <div>
          <h3>{name}</h3>
          <p>{address}</p>
          <img
          src={require(`../../../../Assets/img/yelp-stars/${rating}.png`)}
          alt=" Stars"
        />
          <p>{rating}</p>
          <p>{phone}</p>
          <button className='button-modal' onClick={(e) => {
            e.preventDefault();
            window.open(url)
          }}>Business Website <span>{/*Icon name="search" />*/}</span></button>
        </div>
      </div>
    </div>
  );
}
