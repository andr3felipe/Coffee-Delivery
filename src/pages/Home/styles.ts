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
  max-width: 95vw;
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

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;

    img {
      max-width: 75vw;
    }
  }

  @media (max-width: 630px) {
    font-size: 0.75rem;
    padding: 5.875rem 0 6.75rem;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 0.9375rem;
    }
  }
`

export const IntroAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 4.125rem;

  @media (max-width: 1200px) {
    max-width: 95vw;
    margin-top: 30px;
    justify-content: center;
    text-align: center;
  }

  > div {
    max-width: 90vw;
  }
`

export const FeaturesAlign = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  width: 100%;
  gap: 1.25rem;
  @media (min-width: 710px) and (max-width: 1200px) {
    max-width: 85vw;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 710px) {
    grid-template-columns: 1fr;
  } ;
`

export const BaseFeaturesAlign = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }

  @media (min-width: 711px) and (max-width: 1200px) {
    margin: 0 auto 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 710px) {
    justify-content: flex-start;
    margin-left: 20px;
  }
`

export const FeaturesCart = styled(BaseFeaturesAlign)`
  svg {
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme.background};
  }

  @media (min-width: 710px) and (max-width: 1200px) {
    margin-left: -3px;
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

  @media (min-width: 710px) and (max-width: 1200px) {
    margin-left: -6px;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 70rem;
  width: 100%;

  gap: 3.375rem;

  padding-top: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2';
    font-size: 2rem;
  }

  @media (max-width: 1200px) {
    h2 {
      margin: 0 auto 0 auto;
    }
  } ;
`

export const ProductsAlign = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto 0 auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto 0 auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 0 auto 0 auto;
  }
`
