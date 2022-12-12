// Coloque aqui suas actions\
export const ADD_LOGIN = 'ADD_LOGIN';

export const addEmailAndPassword = (personalInfo) => {
  console.log('pelo amor de Deus');
  return {
    type: ADD_LOGIN,
    payload: personalInfo,
  };
};
