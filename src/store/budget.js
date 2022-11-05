import Store from 'lib/Store';

const initialState = {
  remainBudget: 0,
};

/* Actions */
const BUDGET = 'BUDGET';

/* Action Creators */
export const budget = (payload) => ({ type: BUDGET, payload });

/* Reducer */
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BUDGET: {
      return { ...state, remainBudget: payload };
    }
    default: {
      return { ...state };
    }
  }
};

const store = new Store({ state: initialState, reducer });

export default store;
