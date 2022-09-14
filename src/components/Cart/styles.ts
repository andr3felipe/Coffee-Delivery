import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 23rem;
  padding: 0 2.5rem 2.5rem;
  border-radius: 6px 44px;
  margin-top: 15px;

  background: ${(props) => props.theme['base-card']};
`
export const CartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 12px;
  }
  div:last-of-type {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;

    gap: 12px;
  }
`

export const ConfirmButton = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  padding: 12px 8px;
  border-radius: 6px;
  border: 0;
  margin-top: 1.5rem;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  width: 100%;

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    transition: 0.2s;
  }
`
