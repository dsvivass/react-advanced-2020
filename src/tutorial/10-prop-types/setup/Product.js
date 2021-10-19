import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = (props) => {
  return <article className='product'>
    <img src={props.image.url} alt="" />
    {/* {props.image.url ? <img src={props.image.url} alt="" />: <img src={defaultImage} alt="" />} */}
    <h4>{props.name}</h4>
    <p>${props.price}</p>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
Product.defaultProps = {
  name: 'defaul name',
  price: 3.99,
  image: {url: defaultImage}
}

export default Product;
