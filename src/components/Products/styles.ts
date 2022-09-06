import styled from 'styled-components'

export const BaseCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -20px;
  }

  h3 {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    margin: 8px 20px;

    color: ${(props) => props.theme['base-label']};
  }
`

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    padding: 4px 8px;
    border-radius: 100px;

    margin: 0.75rem 0 1rem 0;
  }
`

export const PriceAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;

  margin-top: 25px;
`

export const Price = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  margin-right: 23px;

  color: ${(props) => props.theme['base-text']};

  > span {
    font-weight: 400;
    line-height: 130%;
    font-style: normal;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
  }
`

export const ProductCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 1.375rem;
  width: 3.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  > span {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }
`

export const ShoppingCartIcon = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  height: 1.375rem;

  padding: 8px;
  border-radius: 6px;
`
