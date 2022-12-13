import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table className="table-edit">
          <thead>
            <tr>
              <th className="description-table">Descrição</th>
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
        </table>
      </div>
    );
  }
}

export default Table;
