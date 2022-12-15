import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrency, loadExpenses } from '../redux/actions';
import fetchCurrency from '../redux/services/api';

class WalletForm extends Component {
  state = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: '',
    id: 0,
  };

  componentDidMount() {
    this.changeWalletCurrency();
  }

  changeWalletCurrency = async () => {
    const result = await fetchCurrency();
    const { dispatch } = this.props;
    const resultKeys = Object.keys(result);
    const newResultKeys = resultKeys.filter((key) => key !== 'USDT');
    dispatch(changeCurrency(newResultKeys));

    // this.setState({ currencies: newResultKeys });
  };

  loadCurrencyObj = async () => {
    const resultObj = await fetchCurrency();
    const { dispatch } = this.props;
    // const { id } = this.state;
    // console.log(id);
    delete resultObj.USDT;
    const newObj = {
      ...this.state,
      exchangeRates: resultObj,
    };
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }), () => {
      const { id } = this.state;
      console.log(id);
    });
    console.log(resultObj);
    dispatch(loadExpenses(newObj));
    this.setState(this.clearExpenses());
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  clearExpenses = () => ({
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  });

  render() {
    const { value, currency,
      method,
      tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <div className="wallet-div">
        <form className="wallet-container">
          <label className="wallet-label" htmlFor="valueInput">
            Valor:
            <input
              className="value"
              type="number"
              data-testid="value-input"
              name="value"
              id="value"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>
          <label className="coin-label" htmlFor="coinInput">
            Moeda:
            <select
              className="coin"
              data-testid="currency-input"
              type="text"
              name="currency"
              id="currency"
              onChange={ this.handleChange }
              value={ currency }
            >
              {currencies.map((currencyC) => (
                <option key={ currencyC } value={ currencyC }>{currencyC}</option>
              ))}
            </select>
          </label>
          <label className="payment-label" htmlFor="paymentInput">
            Método de pagamento:
            <select
              className="payment"
              data-testid="method-input"
              type="text"
              name="method"
              id="method"
              onChange={ this.handleChange }
              value={ method }
            >
              <option type="submit" value="Dinheiro">Dinheiro</option>
              <option type="submit" value="Cartão de crédito">Cartão de cŕedito</option>
              <option type="submit" value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label className="tag-label" htmlFor="tagInput">
            Tag:
            <select
              className="tag"
              data-testid="tag-input"
              type="text"
              name="tag"
              id="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label className="description-label" htmlFor="descriptionInput">
            Descrição:
            <input
              className="description"
              type="textarea"
              data-testid="description-input"
              name="description"
              id="description"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
          <div className="add-walletButton">
            <button
              className="add-button"
              type="button"
              onClick={ () => this.loadCurrencyObj() }
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // expenses: PropTypes.instanceOf(Array).isRequired,
  currencies: PropTypes.shape({
    forEach: PropTypes.func,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
