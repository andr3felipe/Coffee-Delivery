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
  max-width: 100vw;
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
`

export const ShoppingCartDiv = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 6px;
  padding: 8px;
`
