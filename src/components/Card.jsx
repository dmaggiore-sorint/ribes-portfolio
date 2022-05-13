import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="projects__item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div className="projects__item-stack">{item.stack}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
