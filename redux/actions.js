// action types
const ACTION_COUNTER_INCREMENT = `ACTION_COUNTER_INCREMENT`;
const ACTION_COUNTER_DECREMENT = `ACTION_COUNTER_DECREMENT`;
const ACTION_COUNTER_SET = `ACTION_COUNTER_SET`;

// action creator
const actionCreator = (type, payload) => ({ type, payload });

// actions
const incrementAction = actionCreator(ACTION_COUNTER_INCREMENT);
const decrementAction = actionCreator(ACTION_COUNTER_DECREMENT);
const setAction = actionCreator(ACTION_COUNTER_SET, 10);

module.exports = {
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_SET,
  incrementAction,
  decrementAction,
  setAction
};
