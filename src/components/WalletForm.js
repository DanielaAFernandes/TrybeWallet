import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { changeCurrency } from '../redux/actions';
// import fetchCurrency from '../redux/services/api';

class WalletForm extends Component {
  state = {
    valueInput: '',
    coinInput: 'USD',
    paymentInput: 'Dinheiro',
    tagInput: 'Alimentação',
    descriptionInput: '',
    // currency: [],
  };

  // componentDidMount() {
  //   this.changeWalletCurrency();
  // }

  // changeWalletCurrency = async () => {
  //   const result = await fetchCurrency();
  //   const { dispatch } = this.props;
  //   dispatch(changeCurrency(result));

  //   this.setState({ currency: result });
  // };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { valueInput, coinInput,
      paymentInput,
      tagInput, descriptionInput } = this.state;
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
              {/* {currency.map((coin) => (<option key={ coin } value={ coin }>{coin}</option>
              ))} */}
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
              <option value="Cartão de crédito">Cartão de cŕedito</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Dinheiro">Dinheiro</option>
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
              // disabled={ isSubmitButtonDisabled }
              // onClick={ () => dispatch(addEmailAndPassword(emailInput)) }
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// WalletForm.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
