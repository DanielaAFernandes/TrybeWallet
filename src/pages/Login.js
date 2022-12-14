import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmailAndPassword } from '../redux/actions';

class Login extends React.Component {
  state = {
    emailInput: '',
    passwordInput: '',
    isSubmitButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isSubmitButtonDisabled: !this.validateEmailPassword(),
      });
    });
  };

  validateEmailPassword = () => {
    const { emailInput, passwordInput } = this.state;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const email = emailRegex.test(emailInput);
    const minNumber = 6;
    return passwordInput.length >= minNumber && email;
  };

  render() {
    const { emailInput, isSubmitButtonDisabled, passwordInput } = this.state;
    const { dispatch } = this.props;
    return (
      <div className="login-container">
        {/* <div className="trybe-logo">
          <img
            src="https://theme.zdassets.com/theme_assets/9633455/ecf228e8c15da1a8bd07f574e675a0ac59330968.png"
            alt="trybe-logo"
          />
        </div> */}
        <form className="form-container" onSubmit={ this.handleSubmit }>
          <label className="login-label" htmlFor="login-input">
            Login:
            <input
              className="login"
              type="email"
              data-testid="email-input"
              name="emailInput"
              id="login-input"
              onChange={ this.handleChange }
              value={ emailInput }
            />
          </label>
          <label className="senha-label" htmlFor="senha-input">
            Senha:
            <input
              className="senha"
              type="text"
              data-testid="password-input"
              name="passwordInput"
              id="senha-input"
              onChange={ this.handleChange }
              value={ passwordInput }
            />
          </label>
          <div className="entrar-button">
            <Link to="/carteira">
              <button
                className="submit-button"
                type="submit"
                disabled={ isSubmitButtonDisabled }
                onClick={ () => dispatch(addEmailAndPassword(emailInput)) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  writeEmail: state.email,
});

export default connect(mapStateToProps)(Login);
