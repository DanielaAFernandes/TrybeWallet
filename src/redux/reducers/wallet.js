// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCY, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCY: {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  case ADD_EXPENSES: {
    console.log(action);
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  }
  default: return state;
  }
};

export default wallet;
