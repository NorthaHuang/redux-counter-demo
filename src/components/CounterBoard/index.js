import React from 'react';
import { connect } from 'react-redux';
import StyledWrapper from './styled';

const CounterBoard = ({ counter }) => {
  return (
    <StyledWrapper>
      <h1>{counter}</h1>
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(CounterBoard);
