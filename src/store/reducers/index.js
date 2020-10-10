import { INCREMENT, DECREMENT, ADD_5, SUBTRACT_5 } from '../actions/actionTypes';

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case ADD_5:
      return {
        counter: state.counter + 5,
      };
    case SUBTRACT_5:
      return {
        counter: state.counter - 5,
      };

    default:
      return state;
  }
};

export default rootReducer;
