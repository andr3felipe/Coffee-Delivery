import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin: 0 auto 0 auto;

  gap: 6.375rem;
  padding: 5rem 10rem;
  width: 70rem;

  img {
    margin-bottom: -14px;
  }
`

export const OrderConfirmed = styled.div`
  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};

    padding-bottom: 2.5rem;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 27.875rem;

    color: ${(props) => props.theme['base-text']};

    gap: 2rem;
    padding: 2.5rem;
    border: 1px solid transparent;
    border-radius: 6px 36px;

    background: linear-gradient(
          ${(props) => props.theme.background},
          ${(props) => props.theme.background}
        )
        padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        )
        border-box;
  }

  > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 1000px;
      color: ${(props) => props.theme.background};
    }
  }

  > div > div:nth-child(1) {
    line-height: 130%;

    svg {
      background-color: ${(props) => props.theme.purple};
    }
  }

  > div > div:nth-child(2) {
    > div {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      line-height: 130%;
    }
    svg {
      background-color: ${(props) => props.theme.yellow};
    }
  }

  > div > div:nth-child(3) {
    > div {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      line-height: 130%;
    }
    svg {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
