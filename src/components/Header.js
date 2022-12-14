import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  // totalExpenses = () => {
  //   const { expenses } = this.props;
  //   let quantityOfExpenses = 0;
  //   if (expenses.length > 0) {
  //     quantityOfExpenses = expenses((acc, curr) => {
  //       acc += curr.value * curr.exchangeRates[curr.currency].ask;
  //       return acc;
  //     }, 0);
  //   }
  //   return quantityOfExpenses.toFixed(2);
  // };

  render() {
    const { email } = this.props;
    return (
      <div className="header-info">
        <div className="email-header">
          <p data-testid="email-field">
            E-mail:
            { email }
          </p>
        </div>
        <div className="expenses-header">
          <p data-testid="total-field">
            {/* { this.totalExpenses() } */}
            0
          </p>
        </div>
        <div className="currency-header">
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   value: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   currency: PropTypes.string.isRequired,
  //   method: PropTypes.string.isRequired,
  //   tag: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
