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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    const newValue = target.type === 'checkbox' ? 'checked' : value;
    this.setState((previousState) => ({
      ...previousState,
      [name]: newValue,
    }));
  }

  render() {
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form onInputChange={ this.onInputChange } />
        <Card />
      </div>
    );
  }
}

// cardName, cardDescription, cardAttr1, cardAttr2,
//       cardAttr3, cardImage, cardRare, cardTrunfo

export default App;
