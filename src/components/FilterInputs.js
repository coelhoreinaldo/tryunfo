import React from 'react';
import PropTypes from 'prop-types';

export default class FilterInputs extends React.Component {
  render() {
    const { disabledFilter,
      handleSearchChangeByName,
      handleSearchChangeByRare,
      handleSearchChangeByTrunfo } = this.props;
    return (
      <section>
        <label>
          <input
            type="text"
            onChange={ handleSearchChangeByName }
            data-testid="name-filter"
            placeholder="Filtrar"
            disabled={ disabledFilter }
          />
        </label>
        <label>
          <select
            data-testid="rare-filter"
            onChange={ handleSearchChangeByRare }
            disabled={ disabledFilter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label>
          Super Trunfo
          <input
            type="checkbox"
            onChange={ handleSearchChangeByTrunfo }
            data-testid="trunfo-filter"
          />
        </label>
      </section>

    );
  }
}

FilterInputs.propTypes = {
  disabledFilter: PropTypes.bool.isRequired,
  handleSearchChangeByName: PropTypes.func.isRequired,
  handleSearchChangeByRare: PropTypes.func.isRequired,
  handleSearchChangeByTrunfo: PropTypes.func.isRequired,
};
