import {
  AlignHeader,
  CartItemsCounter,
  HeaderContainer,
  Location,
  ShoppingCartDiv,
} from './styles'
import CoffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Header() {
  const { cart } = useContext(CyclesContext)

  return (
    <AlignHeader>
      <HeaderContainer>
        <NavLink to="/">
          <img src={CoffeeLogo} alt="" />
        </NavLink>
        <div>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <ShoppingCartDiv>
            <NavLink to="checkout">
              <ShoppingCart size={22} weight="fill" />
              {cart.length > 0 ? (
                <CartItemsCounter>{cart.length}</CartItemsCounter>
              ) : null}
            </NavLink>
          </ShoppingCartDiv>
        </div>
      </HeaderContainer>
    </AlignHeader>
  )
}
