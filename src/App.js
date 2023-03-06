import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: '',
  //     hasTrunfo: '',
  //     isSaveButtonDisabled: '',
  //   };
  // }

  render() {
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
