import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    const newValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: newValue,
    }, this.validateFields);
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((previousState) => ({
      cards: [...previousState.cards, newCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }));
  }

  deleteCard(event) {
    event.preventDefault();
    const { cards } = this.state;
    const cardToBeDeleted = cards
      .find((card) => card.cardName === event.target.className);
    if (cardToBeDeleted.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    console.log(cardToBeDeleted);
    const newCards = cards;
    newCards.splice(cards.indexOf(cardToBeDeleted));
    this.setState((...previousState) => ({
      ...previousState,
      cards: newCards,
    }));
  }

  validateFields() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const fields = [cardName, cardDescription, cardImage, cardRare];
    const lengthCantBe0 = fields.every((element) => element.length > 0);

    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    const MAX_TOTAL = 210;
    const ATTR_SUM = attrs.reduce((acc, curr) => Number(acc) + Number(curr), 0);
    const sumIsLessThanMax = ATTR_SUM <= MAX_TOTAL;

    const MAX_ATTR = 90;
    const lessThan90 = attrs.every((attr) => Number(attr) <= MAX_ATTR
    && Number(attr) >= 0);

    if (lengthCantBe0 && sumIsLessThanMax && lessThan90) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, cards } = this.state;
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }

        />
        <section>
          {cards.map((card) => (
            <div key={ `${card.cardName} div` }>
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
                onClick={ this.deleteCard }
              >
                Excluir
              </button>
            </div>))}
        </section>
      </div>
    );
  }
}

export default App;
