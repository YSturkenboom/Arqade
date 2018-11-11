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

import bobDylanBg from '../assets/images/bobdylan_bg.jpg';

import './styles.scss';

const COLORS = {
  white: '#fff',
  black: '#000',
};

const BACKGROUNDS = [
  {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url(${bobDylanBg})`,
  },
  {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url('../images/arqade_bg.jpg')",
  },
  {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url('../images/nike_bg.jpg')",
  },
  {
    backgroundImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url('../images/nike_bg.jpg')",
  },
];

const QUESTIONS = [
  {
    question: 'H&M',
    answers: ['b', 'd', 'sd', 'fgd yhr'],
    correctAnswer: 1,
  },
  {
    question: 'Bob Dylan',
    answers: ['b', 'd', 'sd', 'fgd yhr'],
    correctAnswer: 1,
  },
  {
    question:
      'Nike is an American corporation specializing in the sale of sports equipment. In which state would you find their headquarters?',
    answers: ['Oregon', 'California', 'Washington', 'New York'],
    correctAnswer: 1,
  },
  {
    question: 'Playstation',
    answers: ['b', 'd', 'sd', 'fgd yhr'],
    correctAnswer: 1,
  },
];

const CARDS = [
  {
    logo: hm,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Men’s original 500 boots',
    productImage: boots,
    background: '#4ad4fd',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 0,
  },
  {
    logo: vinylLogo,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Bob Dylan 12" Album',
    productImage: bobDylan,
    background: '#DE4329',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 1,
  },

  {
    logo: nikeLogo,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Paris saint germain squad top',
    productImage: nikeShirt,
    background: COLORS.white,
    color: COLORS.black,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 2,
  },

  {
    logo: PlaystationLogo,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    title: 'Sony DualShock 4 Controller',
    productImage: controller,
    background: COLORS.black,
    color: COLORS.white,
    colorButton: COLORS.black,
    backgroundButton: COLORS.white,
    id: 3,
  },
];

class App extends Component {
  popup = <Popup />;

  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      activeQuestionNum: null,
    };
  }

  hidePopup = () => {
    this.setState({ popupVisible: false });
  };

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
        popup={() => this.setState({ popupVisible: true, activeQuestionNum: card.id })}
      />
    ));

    const { popupVisible, activeQuestionNum } = this.state;
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
              Do you like discounts? Of course you do, discounts are awesome. But scraping together
              promo codes or waiting for sale? Decidedly not awesome. We at Arqade think receiving
              discounts should be as fun as the discounts themselves.
            </p>
          </div>
          <div className="landingpage__buttons">
            <Link className="cta1" to="ProductContainer" spy smooth duration={1000}>
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
        {popupVisible === true && (
          <Popup
            onClose={() => this.hidePopup()}
            content={QUESTIONS[activeQuestionNum]}
            background={BACKGROUNDS[activeQuestionNum]}
          />
        )}
      </div>
    );
  }
}

export default App;
