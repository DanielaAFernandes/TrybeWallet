// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_LOGIN } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_LOGIN: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default: return state;
  }
};

export default wallet;
