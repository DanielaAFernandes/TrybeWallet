import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrency } from '../redux/actions';
import fetchCurrency from '../redux/services/api';

class WalletForm extends Component {
  state = {
    valueInput: '',
    coinInput: 'USD',
    paymentInput: 'Dinheiro',
    tagInput: 'Alimentação',
    descriptionInput: '',
    // expenses: '',
    currencies: [],
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

    this.setState({ currencies: newResultKeys });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  clearExpenses = () => {
    state = {
      valueInput: '',
      coinInput: '',
      paymentInput: '',
      tagInput: '',
      descriptionInput: '',
    };
  };

  render() {
    const { valueInput, coinInput,
      paymentInput, currencies,
      tagInput, descriptionInput } = this.state;
    console.log('aqui', currencies);
    return (
      <div className="wallet-div">
        <form className="wallet-container">
          <label className="wallet-label" htmlFor="valueInput">
            Valor:
            <input
              className="value"
              type="number"
              data-testid="value-input"
              name="valueInput"
              id="valueInput"
              onChange={ this.handleChange }
              value={ valueInput }
            />
          </label>
          <label className="coin-label" htmlFor="coinInput">
            Moeda:
            <select
              className="coin"
              data-testid="currency-input"
              type="text"
              name="coinInput"
              id="coinInput"
              onChange={ this.handleChange }
              value={ coinInput }
            >
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))}
            </select>
          </label>
          <label className="payment-label" htmlFor="paymentInput">
            Método de pagamento:
            <select
              className="payment"
              data-testid="method-input"
              type="text"
              name="paymentInput"
              id="paymentInput"
              onChange={ this.handleChange }
              value={ paymentInput }
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
              name="tagInput"
              id="tagInput"
              onChange={ this.handleChange }
              value={ tagInput }
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
              name="descriptionInput"
              id="descriptionInput"
              onChange={ this.handleChange }
              value={ descriptionInput }
            />
          </label>
          <div className="add-walletButton">
            <button
              className="add-button"
              type="submit"
              onClick={ () => dispatch(this.clearExpenses()) }
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
  currencies: PropTypes.shape({
    forEach: PropTypes.func,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
