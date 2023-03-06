import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { onInputChange, onSaveButtonClick,
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.props;
    console.log(hasTrunfo);
    return (
      <form style={ { display: 'flex', flexDirection: 'column' } }>
        <label>
          Nome da Carta
          <input
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label>
          Descrição da Carta
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label>
          Atributo 1
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label>
          Atributo 2
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label>
          Atributo 3
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label>
          Imagem
          <input
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label>
          Raridade da Carta
          <select
            name="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label>
          Super Trunfo
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
