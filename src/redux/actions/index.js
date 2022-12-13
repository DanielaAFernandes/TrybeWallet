// Coloque aqui suas actions\
export const ADD_LOGIN = 'ADD_LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';

export const addEmailAndPassword = (personalInfo) => {
  console.log('pelo amor de Deus');
  return {
    type: ADD_LOGIN,
    payload: personalInfo,
  };
};

export const changeCurrency = (currencies) => {
  console.log('será se vai aparecer');
  return {
    type: ADD_CURRENCY,
    payload: currencies,
  };
};
