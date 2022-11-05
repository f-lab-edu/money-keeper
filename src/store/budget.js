import Store from 'lib/Store';

const initialState = {
  count: 0,
};

/* Actions */

/* Action Creators */

// eslint-disable-next-line default-param-last
// const reducer = (state = initialState, action) => ({
//   state,
//   action,
// });

// const store = new Store({ state: initialState, reducer });

const store = new Store({ state: initialState });

export default store;
