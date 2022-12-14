// Coloque aqui suas actions\
export const ADD_LOGIN = 'ADD_LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addEmailAndPassword = (personalInfo) => {
  console.log('pelo amor de Deus');
  return {
    type: ADD_LOGIN,
    payload: personalInfo,
  };
};

export const changeCurrency = (currencies) => ({
  type: ADD_CURRENCY,
  payload: currencies,
});

export const loadExpenses = (expenses) => {
  console.log('expenses');
  return {
    type: ADD_EXPENSES,
    payload: expenses,
  };
};
