import { INCREMENT, DECREMENT, ADD_5, SUBTRACT_5 } from './actionTypes';

/** Actions Creater */
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const add5 = () => ({
  type: ADD_5,
});

export const subtract5 = () => ({
  type: SUBTRACT_5,
});
