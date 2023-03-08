import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

export default class Form extends React.Component {
  render() {
    const { onInputChange, onSaveButtonClick,
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.props;
    return (
      <form className="form">
        <h1>Adicione uma carta</h1>
        <label>
          Nome
          <input
            name="cardName"
            className="card-name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            maxLength={ 40 }
          />
        </label>
        <label>
          Descrição
          <textarea
            name="cardDescription"
            className="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            maxLength={ 70 }
            rows={ 2 }
          />
        </label>
        <div className="attr-container">
          <label className="inline">
            Ataque
            <input
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              max={ 90 }
            />
          </label>
          <label className="inline">
            Defesa
            <input
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              max={ 90 }
            />
          </label>
          <label className="inline">
            Pontos de Vida
            <input
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              max={ 90 }
            />
          </label>
        </div>
        <label className="inline">
          Imagem
          <input
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            className="card-image-input"
          />
        </label>
        <label>
          Raridade da Carta
          <select
            name="cardRare"
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
        <div className="button-trunfo-container">
          <label className="super-trunfo-input">
            Super Trunfo
            { hasTrunfo
              ? <span> Você já tem um Super Trunfo em seu baralho </span>
              : (
                <input
                  name="cardTrunfo"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  data-testid="trunfo-input"
                />
              ) }
          </label>
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
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
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
