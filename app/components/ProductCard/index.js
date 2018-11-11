import React, { Component } from 'react';

import './styles.scss';

class ProductCard extends Component {
  /* eslint-disable */
  render() {
    const {
      subtitle,
      Title,
      logo,
      productImage,
      backgroundCard,
      color,
      colorButton,
      backgroundButton,
      popup,
    } = this.props;
    const stylesBg = {
      background: backgroundCard,
    };

    /* eslint-enable */

    const stylesColor = {
      color,
    };

    const buttonStyle = {
      color: colorButton,
      background: backgroundButton,
    };

    return (
      // <div style={stylesBg} className="ProductCard">
      //   <div className="ProductCard__header">
      //     <img src={logo} alt="logo" />
      //   </div>
      //   <div className="ProductCard__content">
      //     <p style={stylesColor}>{subtitle}</p>
      //     <h3 style={stylesColor}>{Title}</h3>
      //   </div>
      //   <div className="ProductCard__button">
      //     <button style={buttonStyle} type="button">
      //       GET DISCOUNT
      //     </button>
      //   </div>
      //   <div className="ProductCard__image">
      //     <img src={productImage} alt="product" />
      //   </div>

      <div style={stylesBg} className="ProductCard">
        <div className="ProductCard__header">
          <img src={logo} alt="logo" />
        </div>
        <div className="ProductCard__content">
          <p style={stylesColor}>{subtitle}</p>
          <h3 style={stylesColor}>{Title}</h3>
        </div>
        <div className="ProductCard__button">
          <button
            style={buttonStyle}
            type="button"
            onClick={() => popup()}
          >
            Play!
          </button>
        </div>
        <div className="ProductCard__image">
          <img src={productImage} alt="product" />
        </div>
      </div>
    );
  }
}

ProductCard.defaultProps = {
  subtitle: null,
  Title: null,
  logo: null,
  productImage: null,
  backgroundCard: null,
  color: null,
  colorButton: null,
  backgroundButton: null,
  popup: null,
};

export default ProductCard;
