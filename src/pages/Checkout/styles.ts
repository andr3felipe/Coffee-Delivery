import styled from 'styled-components'

export const CheckoutDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2.5rem auto 0 auto;
  width: 70rem;
  padding: 0 10rem 0 10rem;
  gap: 2rem;

  form {
    display: flex;
    gap: 2rem;
  }
`

export const CompleteYourOrder = styled.div`
  > h3 {
    margin-bottom: 0.9375rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-size: 1.125rem;
  }
`

export const OrderForm = styled.div``

export const FormAddres = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 37.5rem;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;

  border-radius: 6px;

  > h3 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    gap: 8px;

    color: ${(props) => props.theme['base-subtitle']};

    > svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  > p {
    margin-left: 1.875rem;
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  > form > input {
    display: block;
  }

  > form > div {
    display: flex;
    gap: 12px;
  }

  > form input {
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 1rem;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
      box-shadow: none;
    }
  }

  [title~='CEP'] {
    max-width: 11.4rem;
  }

  [title~='UF'] {
    width: 2.25rem;
  }

  [title~='Cidade'] {
    flex-grow: 1;
  }
`

export const FormOld = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  > input {
    display: block;
  }

  > div {
    display: flex;
    gap: 12px;
  }

  > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    margin-bottom: 1rem;
  }

  div ~ div:nth-child(2) > input {
    width: 100%;
  }

  div ~ div:nth-child(3) div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;

    svg {
      margin-bottom: 1rem;
      margin-left: 12px;
    }
  }

  div ~ div:nth-child(4) div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;

    svg {
      margin-bottom: 1rem;
      margin-left: 12px;
    }
  }

  div ~ div:nth-child(5) div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;

    svg {
      margin-bottom: 1rem;
      margin-left: 12px;
    }
  }

  div ~ div:nth-child(6) div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;

    svg {
      margin-bottom: 1rem;
      margin-left: 12px;
    }
  }

  input {
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 1rem;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
      box-shadow: none;
    }
  }
`

export const ShoppingCartItems = styled.div`
  > div > h3 {
    margin-bottom: 0.9375rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-size: 1.125rem;
  }
`

export const ComplementoInput = styled.input`
  flex: 1;

  ~ span {
    position: absolute;
    width: 0;
  }

  &:placeholder-shown ~ span::after {
    content: 'Opcional';
    position: relative;
    right: -539px;
    top: 13px;

    font-style: italic;
    line-height: 130%;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  padding: 40px;
  width: 37.5rem;

  border-radius: 6px;
  margin-top: 0.75rem;

  > h3 svg {
    color: ${(props) => props.theme.purple};
  }

  h3 {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;

    gap: 8px;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;

    margin-top: 2px;
    font-size: 0.875rem;
    margin-left: 30px;
  }
`
export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  margin-top: 2rem;

  div {
    display: flex;
    background: ${(props) => props.theme['base-button']};
    font-size: 0.75rem;

    border-radius: 6px;
    padding: 16px;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};

      transition: 0.2s;
    }

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  input {
    display: none;
  }

  label {
    flex: 1;
  }

  label > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
`
