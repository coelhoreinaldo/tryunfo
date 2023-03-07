import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class RenderizeCardList extends React.Component {
  render() {
    const { cards, nameSearch, rareSearch, trunfoSearch, deleteCard } = this.props;
    return (
      <section className="card-list">
        {cards
          .filter((card) => (trunfoSearch ? card.cardTrunfo === trunfoSearch : card))
          .filter((card) => {
            if (rareSearch === '') {
              return card.cardRare.includes(rareSearch);
            }
            return card.cardRare === rareSearch;
          })
          .filter((card) => card.cardName.includes(nameSearch))
          .map((card) => (
            <div
              key={ `${card.cardName} div` }
              className="card"
            >
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                className={ card.cardName }
                onClick={ deleteCard }
              >
                Excluir
              </button>
            </div>))}
      </section>
    );
  }
}

RenderizeCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  nameSearch: PropTypes.string.isRequired,
  rareSearch: PropTypes.string.isRequired,
  trunfoSearch: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};