import React, { useState } from 'react';
// import { Icon } from 'semantic-ui-react';
<<<<<<< HEAD
=======
import { FaHandPointUp } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec

import { Modal } from './Modal';
import styles from './SearchResult.module.css';

export function SearchResult(props) {
  const [isOpen, setIsOpen] = useState(false);


  const b = props.business;
  if (!b) {
    return <div />;
  }
  //console.log(b);
  const rating = b.rating;
  const name = b.name;
  //const yelpBusinessURL = b.url;
  // const phone = b.phone;
  // const pickup = b.transactions[0];
  // const delivery = b.transactions[1];

  const tags = b.categories.map((category) => (
    <span
      className={`tag ${styles['business-tag']}`}
      key={b.id + category.title}
    >
      {category.title}
    </span>
  ));
  const addressLines = b.location.display_address.map((addressLine) => (
    <p key={b.id + addressLine}>{addressLine}</p>
  ));

  // function submit(e) {
  //     if(typeof props.search === 'function') {
  //         props.search(name);
  //     }
  //     console.log(name, yelpBusinessURL, phone, pickup, delivery);
  //     e.preventDefault();
  // }

  function onSubmit(e) {
    // let restaurantInfo = {
    //   name: name, 
    //   address: addressLines,
    //   url: yelpBusinessURL,
    //   phone: phone,
    //   pickup: pickup,
    //   delivery: delivery
    // }
   console.log(name) 
  //  console.log (b)
   localStorage.setItem('restaurantInfo', JSON.stringify(name));
   window.location.href='/drink';
  }

  return (
    <div className={styles['search-result']}>
      <img
        src={b.image_url}
        alt="business"
        className={styles['business-image']}
      />
      <div className={styles['business-info']}>
        <h2 className="subtitle">{b.name}</h2>
        <img
          src={require(`../../../../Assets/img/yelp-stars/${rating}.png`)}
          alt=" Stars"
          className={styles['review-stars']}
        />
        <p>{b.review_count} Reviews</p>
        <p>
          {b.price} {tags}
        </p>
      </div>
      <div className={styles['contact-info']}>
        <p>{b.phone}</p>
        {addressLines}
        <button
          className={styles['choose-button']}
          onClick={() => setIsOpen(true)}
        >
          Check out <span>{b.name}</span>
          <span>
<<<<<<< HEAD
            {/*<Icon name="hand pointer" />*/}
=======
            <FaHandPointUp />
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec
          </span>
        </button>
        <Modal
          open={isOpen}
          visible={props}
          props={props.business}
          onClose={() => setIsOpen(false)}
        ></Modal>
<<<<<<< HEAD
        <button onClick={onSubmit} className={styles['choose-button']}>Choose This Restaurant <span>{/*<Icon name="food" />*/}</span></button>
=======
        <button onClick={onSubmit} className={styles['choose-button']}>Choose This Restaurant <span> <MdFastfood /></span></button>
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec
      </div>
    </div>
  );
}
