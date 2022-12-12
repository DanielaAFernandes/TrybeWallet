import React from 'react';
import '../index.css';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return (
      <form className="wallet-container">
        <label className="wallet-label" htmlFor="value-input">
          Valor:
          <input
            className="login"
            type="number"
            // data-testid="email-input"
            name="valueInput"
            id="valueInput"
            // onChange={ this.handleChange }
            // value={ valueInput }
          />
        </label>
        <label className="coin-label" htmlFor="coinInput">
          <select
            className="senha"
            type="text"
            name="coinInput"
            id="coinInput"
            // onChange={ this.handleChange }
            // value={ coinInput }
          >
            <option value="usd">USD</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  writeEmail: state.email,
});

export default connect(mapStateToProps)(Wallet);
