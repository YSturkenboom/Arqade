import React, { Component } from 'react';
import { Link } from 'react-scroll';
import ProductCard from './ProductCard';
import Popup from './Popup';
import hm from '../assets/images/hm_logo.png';
import boots from '../assets/images/Boots.png';
import nikeLogo from '../assets/images/nike_logo.png';
import nikeShirt from '../assets/images/nike_shirt.png';
import PlaystationLogo from '../assets/images/playstation_logo.png';
import controller from '../assets/images/controller.png';
import vinylLogo from '../assets/images/vinyl_logo.png';
import bobDylan from '../assets/images/bobdylan_lp.png';
import waveHand from '../assets/images/wave_hand.png';

import './styles.scss';

const COLORS = {
  white: '#fff',
  black: '#000',
};

const CARDS = [
  {
    logo: hm,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Men’s original 500 boots',
    productImage: boots,
    background: '#4ad4fd',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 1,
  },
  {
    logo: vinylLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Bob Dylan 12" Album',
    productImage: bobDylan,
    background: '#DE4329',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 2,
  },

  {
    logo: nikeLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Paris saint germain squad top',
    productImage: nikeShirt,
    background: COLORS.white,
    color: COLORS.black,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 3,
  },

  {
    logo: PlaystationLogo,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Sony DualShock 4 Controller',
    productImage: controller,
    background: COLORS.black,
    color: COLORS.white,
    colorButton: COLORS.black,
    backgroundButton: COLORS.white,
    id: 4,
  },
];

class App extends Component {
  popup = <Popup />;

  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
    };
  }

  hidePopup = () => {
    this.setState({ popupVisible: false });
  }

  render() {
    const cards = CARDS.map(card => (
      <ProductCard
        key={card.id}
        subtitle={card.subtitle}
        Title={card.title}
        logo={card.logo}
        productImage={card.productImage}
        backgroundCard={card.background}
        color={card.color}
        colorButton={card.colorButton}
        backgroundButton={card.backgroundButton}
        popup={() => this.setState({ popupVisible: true })}
      />
    ));

    const { popupVisible } = this.state;
    return (
      <div>
        <div className="landingpage">
          <div className="landingpage__logo">
            <p>Arqade</p>
          </div>
          <div className="landingpage__content">
            <h4>
              Hey there you
              <img src={waveHand} alt="wave" />
            </h4>
            <p>
              Do you like discounts? Of course you do, discounts are awesome.
              But scraping together promo codes or waiting for sale? Decidedly
              not awesome. We at Arqade think receiving discounts should be as
              fun as the discounts themselves.
            </p>
          </div>
          <div className="landingpage__buttons">
            <Link
              className="cta1"
              to="ProductContainer"
              spy
              smooth
              duration={1000}
            >
              Get discount
            </Link>
            <a
              href="https://zenobruinsma.typeform.com/to/YnIZnL"
              data-mode="popup"
              className="cta2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a review
            </a>
          </div>
        </div>
        <div name="ProductContainer" className="ProductContainer">
          {cards}
        </div>
        {(popupVisible === true)
          && <Popup onClose={() => this.hidePopup()} />
        }
      </div>
    );
  }
}

export default App;
