import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

export default class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="card">
        <h2 data-testid="name-card">{cardName}</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p
          data-testid="description-card"
          className="description-card"
        >
          {cardDescription}

        </p>
        <p data-testid="attr1-card">
          Ataque:
          <span>{cardAttr1}</span>
        </p>
        <p data-testid="attr2-card">
          Defesa:
          <span>{cardAttr2}</span>
        </p>
        <p data-testid="attr3-card">
          Pontos de Vida:
          <span>{cardAttr3}</span>
        </p>
        <div className="rare-trunfo-container">
          <p
            className="card-rare"
            data-testid="rare-card"
          >
            {cardRare}

          </p>

          {
            cardTrunfo
          && <p data-testid="trunfo-card" className="card-trunfo">Super Trunfo</p>
          }
        </div>
      </section>
    );
  }
}

Card.defaultProps = {
  cardTrunfo: false,
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
};
