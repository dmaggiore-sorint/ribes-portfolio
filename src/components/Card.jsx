import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={ () => navigate(`/blog/${item.id}`) }
      style={ { backgroundImage: `url('${item.image}')` } }
    >
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
