import React from 'react';
import { connect } from 'react-redux';
import StyledWrapper from './styled';

import { increment, decrement, add5, subtract5 } from '../../store/actions';

const CounterButtons = ({ increment, decrement, add5, subtract5 }) => {
  return (
    <StyledWrapper>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add5}>Add 5</button>
      <button onClick={subtract5}>Subtract 5</button>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  add5: () => dispatch(add5()),
  subtract5: () => dispatch(subtract5()),
});

export default connect(null, mapDispatchToProps)(CounterButtons);
