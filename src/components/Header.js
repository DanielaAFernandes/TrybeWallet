import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
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
          <p data-testid="total-field"> 0</p>
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
};

const mapStateToProps = (state) => ({
  ...state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
