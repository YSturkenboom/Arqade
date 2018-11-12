import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import ProductCard from './ProductCard';
import Contact from './Contact';
import Popup from './Popup';
import hm from '../assets/images/hm_logo.png';
import boots from '../assets/images/Boots.png';
import nikeLogo from '../assets/images/nike_logo.png';
import nikeShirt from '../assets/images/nike_shirt.png';
import PlaystationLogo from '../assets/images/playstation_logo.png';
import controller from '../assets/images/controller.png';
import vinylLogo from '../assets/images/vinyl_logo.png';
import bobDylan from '../assets/images/bobdylan_lp.png';
// import controllerEmoji from '../assets/images/controller_emoji.png';
import joystickEmoji from '../assets/images/joystick_emoji.png';
// import rocketEmoji from '../assets/images/rocket_emoji.png';
import laughingEmoji from '../assets/images/laughing_emoji.png';
import chartEmoji from '../assets/images/chart_emoji.png';
import eyesEmoji from '../assets/images/eyes_emoji.png';
import globeEmoji from '../assets/images/globe_emoji.png';
import artistEmoji from '../assets/images/artist_emoji.png';
import wrenchEmoji from '../assets/images/wrench_emoji.png';

import bobDylanBg from '../assets/images/bobdylan_bg.jpg';
import nikeBg from '../assets/images/nike_bg.jpg';
import hmBg from '../assets/images/hm_bg.jpg';
import psBg from '../assets/images/ps_bg.jpg';

import './styles.scss';

const COLORS = {
  white: '#fff',
  black: '#000',
};

const BACKGROUNDS = [
  {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url(${hmBg})`,
  },
  {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url(${bobDylanBg})`,
  },
  {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url(${nikeBg})`,
  },
  {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.66) 50%,rgba(255,255,255,1) 77%,rgba(255,255,255,1) 99%,rgba(255,255,255,1) 100%), url(${psBg})`,
  },
];

const QUESTIONS = [
  {
    question: 'In which country was the First H&M opened?',
    answers: ['The Netherlands', 'Sweden', 'Finland', 'Germany'],
    correctAnswer: 1,
  },
  {
    question: 'Dylan’s 1969 double-LP, widely considered rock’s first bootleg album, was titled:',
    answers: ['The White Album', 'The Black Album', 'Great White Wonder', 'Kum Back'],
    correctAnswer: 2,
  },
  {
    question:
      'Nike is an American corporation specializing in the sale of sports equipment. In which state would you find their headquarters?',
    answers: ['Oregon', 'California', 'Washington', 'New York'],
    correctAnswer: 0,
  },
  {
    question: 'Who is the main character of the original Metal Gear Solid?',
    answers: ['Big Boss', 'Crash Bandicoot', 'Solid Snake', 'Simon Belmont'],
    correctAnswer: 2,
  },
];

const CARDS = [
  {
    logo: hm,
    subtitle: 'Play and get 10% off!',
    title: 'Men’s Original 500 Boots',
    productImage: boots,
    background: '#4ad4fd',
    color: COLORS.white,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 0,
  },
  {
    logo: vinylLogo,
    subtitle: 'Play and get 10% off!',
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
    subtitle: 'Play and get 10% off!',
    title: 'Paris Saint Germain Squad Top',
    productImage: nikeShirt,
    background: COLORS.white,
    color: COLORS.black,
    colorButton: COLORS.white,
    backgroundButton: COLORS.black,
    id: 2,
  },

  {
    logo: PlaystationLogo,
    subtitle: 'Play and get 10% off!',
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

  componentDidMount = () => {
    document.title = 'Arqade - Discounts made fun';
  };

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
      <div className="landingpage">
        <div className="landingpage__logo">
          <p>Arqade</p>
          <Link className="nav2" to="try" spy smooth duration={1000}>
            Try it out yourself
          </Link>
          <Link className="nav2" to="why" spy smooth duration={1000}>
            Why Arqade
          </Link>
          <Link className="nav2 cta1" to="integration" spy smooth duration={1000}>
            Integrate it on your site
          </Link>
        </div>
        <div className="landingpage__content">
          <h4>
            Discounts made fun
            <img src={joystickEmoji} alt="wave" />
          </h4>
          <p>
            Everyone likes discounts, discounts are awesome. But scraping together
            promo codes or waiting for sale? Decidedly not awesome. We at Arqade think receiving
            discounts should be as fun as the discounts themselves.
          </p>
        </div>

        <div className="landingpage__buttons">
          <Link className="cta1" to="integration" spy smooth duration={1000}>
            Integrate it on my website
          </Link>
          <Link className="cta2" to="try" spy smooth duration={1000}>
            Try it out yourself
          </Link>
        </div>

        <div className="h-bar-text">
          <span className="bar" /><span className="bar-text">Examples of Arqade integrations</span><span className="bar" />
        </div>

        <Element name="try">
          <div name="ProductContainer" className="ProductContainer">
            {cards}
          </div>
        </Element>

        <div className="landingpage__content">
          <h4>
            Why Arqade
          </h4>
        </div>

        <div className="landingpage__usps">
          <Element name="why" />
          <div className="usp">
            <img src={laughingEmoji} alt="wave" />
            <div className="bigtext">=</div>
            <img src={chartEmoji} alt="wave" />
            <h5>Fun increases conversion</h5>
            <p>Studies have shown <span className="pulse">fun</span> increases conversion. Why not make use of
              it? :)
            </p>
          </div>
          <div className="usp">
            <img src={globeEmoji} alt="wave" />
            <img src={eyesEmoji} alt="wave" />
            <h5>Get more traffic</h5>
            <p>
              Customers can unlock more tries by sharing, following or liking
              your page on social media
            </p>
          </div>
          <div className="usp">
            <img src={artistEmoji} alt="wave" />
            <img src={wrenchEmoji} alt="wave" />
            <h5>Tailor-made</h5>
            <p>
              From colors to size and content, we can customize everything based
              on your need.
            </p>
          </div>
        </div>

        <Element name="integration" />
        <Contact />

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
