import styled from 'styled-components';

const StyledWrapper = styled.section`
  text-align: center;

  button {
    padding: 0 15px;
    cursor: pointer;
    font-size: 24px;
    line-height: 1.5;

    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

export default StyledWrapper;
