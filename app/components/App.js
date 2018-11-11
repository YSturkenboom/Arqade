import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
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
import controllerEmoji from '../assets/images/controller_emoji.png';
import rocketEmoji from '../assets/images/rocket_emoji.png';

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
    question: 'Nike is an American corporation specializing in the sale of sports equipment. In which state would you find their headquarters?',
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
    subtitle: 'Play and get 15% off!',
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
    subtitle: 'Play and get 15% off!',
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
    subtitle: 'Play and get 20% off!',
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
      <div className="landingpage">
        <div className="landingpage__logo">
          <p>Arqade</p>
        </div>
        <div className="landingpage__content">
          <h4>
            Discounts made fun
            <img src={controllerEmoji} alt="wave" />
          </h4>
          <p>
            Do you like discounts? Of course you do, discounts are awesome. But scraping together
            promo codes or waiting for sale? Decidedly not awesome. We at Arqade think receiving
            discounts should be as fun as the discounts themselves.
          </p>
        </div>
        <div className="landingpage__buttons">
          <Link
            className="cta1"
            to="try"
            spy
            smooth
            duration={1000}
          >
            Try it yourself
          </Link>
          <a
            href="https://zenobruinsma.typeform.com/to/YnIZnL"
            data-mode="popup"
            className="cta2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get early access
          </a>
        </div>
        <Element name="try">
          <div name="ProductContainer" className="ProductContainer">
            {cards}
          </div>
        </Element>
        <div className="landingpage__content">
          <h4>
            Our thoughts
            <img src={rocketEmoji} alt="wave" />
          </h4>

          <p>
            We dont have a really cool origin story to put here, no discovering
            ourselves on a trip to Thailand or prophetic dreams or something
            like that. <br /><br />But what we do have is a desire to make
            buying stuff online more <span className="pulse">fun</span>.
            We&#39;re three guys in the Netherlands trying to make useful, fun and
            exciting products for you.
            <br /><br />
            We would love it if you came along on our journey. We&#39;re very excited
            about Arqade, but we want to evolve Arqade into a great product people
            love, and so we would love some input from the community!
            <br /><br />How can we make your experience better? Do you have feature suggestions?
            Drop us a line, or chat with us via the button in the bottom-right corner!
            We would love to hear your thoughts.
          </p>
        </div>
        <div className="landingpage__buttons">
          <a
            href="https://zenobruinsma.typeform.com/to/YnIZnL"
            data-mode="popup"
            className="cta1 center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share your thoughts
          </a>
        </div>

        <div className="landingpage__content">
          <h4>
            Are you a e-commerce business owner, or do you sell your product online?
            <img src={rocketEmoji} alt="wave" />
          </h4>

          <p>
            Then we are interested in providing a custom integration into your website
            to test our idea. As an early adopter you&#39;ll be uniquely able to help shape
            the final product, and of course
          </p>
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
