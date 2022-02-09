const { createStore } = require('redux');

function increment(amount) {
  return {
    type: 'INCREMENT',
    amount: amount
  };
}

function decrement(amount) {
  return {
    type: 'DECREMENT',
    amount: amount
  };
}

const initialState = {
  count: 0
};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.amount
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.amount
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(increment(2))
store.dispatch(increment(4))
store.dispatch(increment(6))
store.dispatch(increment(8))
store.dispatch(increment(10))
store.dispatch(increment(12))
store.dispatch(decrement(8))

unsubscribe();

store.dispatch(increment(2))
store.dispatch(increment(4))
store.dispatch(increment(6))
store.dispatch(increment(8))
store.dispatch(increment(10))
store.dispatch(increment(12))
store.dispatch(decrement(8))
