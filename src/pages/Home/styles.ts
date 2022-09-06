import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70rem;
  height: 22.5rem;

  gap: 3.5rem;

  padding: 5.875rem 10rem 6.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 16px;
  }
`

export const IntroAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 4.125rem;
`

export const FeaturesAlign = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  width: 100%;
  gap: 1.25rem;
`

export const BaseFeaturesAlign = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
`

export const FeaturesCart = styled(BaseFeaturesAlign)`
  svg {
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme.background};
  }
`

export const FeaturesPackage = styled(BaseFeaturesAlign)`
  svg {
    background: ${(props) => props.theme['base-text']};
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme.background};
  }
`

export const FeaturesTimer = styled(BaseFeaturesAlign)`
  svg {
    background: ${(props) => props.theme.yellow};
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme.background};
  }
`

export const FeaturesCoffee = styled(BaseFeaturesAlign)`
  svg {
    background: ${(props) => props.theme.purple};
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme.background};
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  width: 70rem;

  gap: 3.375rem;

  padding-top: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`

export const ProductsAlign = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
`
