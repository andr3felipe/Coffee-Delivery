import styled from 'styled-components'

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding-top: 2.5rem;
  padding-bottom: 24px;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 20px;
  }

  > div > img {
    height: 4rem;
    width: 4rem;
  }

  > div > div {
    display: flex;
    flex-direction: column;
  }

  > h4 {
    padding-right: 4px;
  }

  @media (max-width: 400px) {
    justify-content: space-between;
    gap: 10px;

    > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        height: 7rem;
        width: 7rem;
      }
    }
  }
`

export const CartItemAlign = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: none;

    border: none;
    background: ${(props) => props.theme['base-button']};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme['base-title']};
    background: ${(props) => props.theme['base-button']};
    font-style: normal;

    gap: 4px;
    padding: 8px;
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme.purple};

      padding: 2px;

      transition: 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
        cursor: pointer;

        transition: 0.2s;
      }
    }
  }

  @media (max-width: 400px) {
    div > button {
      width: 1.8rem;
      height: 1.5rem;

      svg {
        transform: scale(1.25);
      }
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

  gap: 4px;
  border: none;
  border-radius: 6px;
  padding: 0 8px;
  font-size: 0.75rem;
  line-height: 160%;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    transition: 0.2s;
  }

  svg {
    margin-top: -2px;
    color: ${(props) => props.theme.purple};
  }
`
