const { store } = require(`./store`);
const { incrementAction, decrementAction, setAction } = require(`./actions`);

console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(decrementAction);
console.log(store.getState());

store.dispatch(setAction);
console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());
