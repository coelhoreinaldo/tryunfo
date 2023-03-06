import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    const newValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: newValue,
    }, this.validateFields);
  }

  onSaveButtonClick({ event }) {
    event.preventDefault();
  }

  validateFields() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const fields = [cardName, cardDescription, cardImage, cardRare];
    const lengthCantBe0 = fields.every((element) => element.length > 0);

    // const ATTR_TOTAL_LIMIT = 210;
    // const ATTRS_SUM = parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
    //    + parseInt(cardAttr3, 10);
    // const isLess = ATTRS_SUM < ATTR_TOTAL_LIMIT;

    if (lengthCantBe0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.state;
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
      </div>
    );
  }
}

export default App;
