import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
// import renderWithRouterAndRedux from 'renderWithRouterAndRedux';
import { createStore } from 'redux';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import rootReducer from './redux/reducers';
import App from './App';
import WalletForm from './components/WalletForm';
import Table from './components/Table';

const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  history,
});

test('se a aplicação possui um botão de entrar', () => {
  renderWithRouterAndRedux(<App />);

  const entrarButton = screen.getByRole(
    'button',
    { name: /entrar/i },
  );
  expect(entrarButton).toBeInTheDocument();
  userEvent.click(entrarButton);
});

test('se o login tem data-testid="email-input"', () => {
  renderWithRouterAndRedux(<App />);
  const testIdLogin = screen.getByTestId('email-input');
  expect(testIdLogin).toBeInTheDocument();
});

test('se a senha tem data-testid="password-input"', () => {
  renderWithRouterAndRedux(<App />);
  const testIdSenha = screen.getByTestId('password-input');
  expect(testIdSenha).toBeInTheDocument();
});

test('se o botão entrar redireciona para outro link', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const entrarLink = screen.getByRole('link', { name: 'Entrar' });
  expect(entrarLink).toBeInTheDocument();
  userEvent.click(entrarLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/carteira');
});

test('se o e-mail do usuário aparece na tela', () => {
  renderWithRouterAndRedux(<App />);
  const addEmail = 'daniela@daniela.com';
  const addPassword = '271107';
  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  userEvent.type(emailInput, addEmail);
  userEvent.type(passwordInput, addPassword);
  const entrarButton = screen.getByRole('button', { name: 'Entrar' });
  userEvent.click(entrarButton);
  const emailOnScreen = screen.getByText(/daniela@daniela.com/i);
  expect(emailOnScreen).toBeInTheDocument();
});

test('se a aplicação possui um botão de adicionar despesa', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const adicionarButton = screen.getByRole(
    'button',
    { name: /adicionar despesa/i },
  );
  expect(adicionarButton).toBeInTheDocument();
  userEvent.click(adicionarButton);
});

test('se o estado é apagado depois de clicar no botão de adicionar despesas', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const adicionarButton = screen.getByRole(
    'button',
    { name: /adicionar despesa/i },
  );
  expect(adicionarButton).toBeInTheDocument();
  userEvent.click(adicionarButton);
  const valor = screen.getByLabelText('Valor:');
  expect(valor.value).toBe('');
});

test('se o método de pagamento tem data-testid="method-input"', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const testIdMethod = screen.getByTestId('method-input');
  expect(testIdMethod).toBeInTheDocument();
});

test('se é possível selecionar Dnheiro como método de pagamento"', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const dinheiroMethod = screen.getByRole('option', { name: 'Dinheiro' });
  expect(dinheiroMethod).toBeInTheDocument();
});

test('se existe uma tabela', () => {
  renderWithRouterAndRedux(<Table />);
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});
