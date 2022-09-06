import {
  AlignHeader,
  HeaderContainer,
  Location,
  ShoppingCartDiv,
} from './styles'
import CoffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <AlignHeader>
      <HeaderContainer>
        <img src={CoffeeLogo} alt="" />
        <div>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <ShoppingCartDiv>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartDiv>
        </div>
      </HeaderContainer>
    </AlignHeader>
  )
}
