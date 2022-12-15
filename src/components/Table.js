import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    const tableData = expenses.map(({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    }) => (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ Number(value).toFixed(2)}</td>
        <td>{ exchangeRates[currency].name }</td>
        <td>{ Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{ Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
        <td>Real</td>
      </tr>
    ));
    return (
      <div>
        <table className="table-edit">
          <thead>
            <tr>
              <th className="description-table"> Descrição </th>
              <th className="tag-table">Tag</th>
              <th className="method-table">Método de pagamento</th>
              <th className="value-table">Valor</th>
              <th className="coin-table">Moeda</th>
              <th className="currency-table">Câmbio utilizado</th>
              <th className="converted-value-table">Valor convertido</th>
              <th className="conversion-coin-table">Moeda de conversão</th>
              <th className="edit-delete-table">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
