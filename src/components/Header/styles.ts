import styled from 'styled-components'

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const AlignHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  width: 70rem;
  max-width: 95vw;
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
    width: 5.309375rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  a {
    box-shadow: none;

    :visited {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &:active {
      color: ${(props) => props.theme.purple};
    }
  }

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 450px) {
    padding: 2rem 0.5rem;
    font-size: 0.75rem;
  }
`

export const ShoppingCartDiv = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 6px;
  padding: 8px;

  a {
    box-shadow: none;

    :visited {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &:active {
      color: ${(props) => props.theme.purple};
    }
  }
`
export const CartItemsCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin-left: 18px;
  margin-top: -42px;
  font-size: 0.75rem;
  width: 20px;
  height: 20px;

  font-weight: 700;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};

  border-radius: 1000px;
`
