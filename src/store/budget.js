import Store from 'lib/Store';

const initialState = {
  remainingBudget: 200000,
  usedBudget: 0,
  calculatorType: 'expense',
  incomeBudget: '0',
  expenseBudget: '0',
};

/* Actions */
const BUDGET = 'BUDGET';
const INCOME = 'INCOME';
const EXPENSE = 'EXPENSE';
const IN_OUT_TYPE = 'IN_OUT_TYPE';

/* Action Creators */
export const budget = (payload) => ({ type: BUDGET, payload });
export const income = (payload) => ({ type: INCOME, payload });
export const expense = (payload) => ({ type: EXPENSE, payload });
export const inOutType = (payload) => ({ type: IN_OUT_TYPE, payload });

/* Reducer */
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BUDGET: {
      return { ...state, remainingBudget: payload };
    }
    case INCOME: {
      return { ...state, incomeBudget: payload };
    }
    case EXPENSE: {
      return { ...state, expenseBudget: payload };
    }
    case IN_OUT_TYPE: {
      return { ...state, calculatorType: payload };
    }
    default: {
      return { ...state };
    }
  }
};

const store = new Store({ state: initialState, reducer });

export default store;
