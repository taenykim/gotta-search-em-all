import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme }) => theme.screen}
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding: 5 10px;
  flex: 1;

  .flex {
    display: flex;
    justify-content: space-between;

    .move-name {
      font-size: 24px;
      border-bottom: solid black 2px;
      margin-bottom: 3px;
      text-align: center;
      text-transform: capitalize;
    }

    .move-right {
    }
  }

  .move-description {
    ${({ theme }) => theme.spriteScreen}
    display: block;
    margin: 10px 3px 5px;
    padding: 5px 10px;

    hr {
      margin: 5px 0;
    }
  }
`;

export default Container;
