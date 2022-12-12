import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div className="wallet-div">
        <form className="wallet-container">
          <label className="wallet-label" htmlFor="valueInput">
            Valor:
            <input
              className="value"
              type="number"
              // data-testid="email-input"
              name="valueInput"
              id="valueInput"
              // onChange={ this.handleChange }
              // value={ valueInput }
            />
          </label>
          <label className="coin-label" htmlFor="coinInput">
            Moeda:
            <select
              className="coin"
              type="text"
              name="coinInput"
              id="coinInput"
              // onChange={ this.handleChange }
              // value={ coinInput }
            >
              <option value="usd">USD</option>
            </select>
          </label>
          <label className="payment-label" htmlFor="paymentInput">
            Método de pagamento:
            <select
              className="payment"
              type="text"
              name="paymentInput"
              id="paymentInput"
              // onChange={ this.handleChange }
              // value={ coinInput }
            >
              <option value="creditCard">Cartão de cŕedito</option>
              <option value="debitCard">Cartão de débito</option>
              <option value="cash">Dinheiro</option>
            </select>
          </label>
          <label className="tag-label" htmlFor="tagInput">
            Tag:
            <select
              className="tag"
              type="text"
              name="tagInput"
              id="tagInput"
              // onChange={ this.handleChange }
              // value={ coinInput }
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
          <label className="description-label" htmlFor="descriptionInput">
            Descrição:
            <input
              className="description"
              type="textarea"
              // data-testid="email-input"
              name="descriptionInput"
              id="descriptionInput"
              // onChange={ this.handleChange }
              // value={ valueInput }
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

export default WalletForm;
