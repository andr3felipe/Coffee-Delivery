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
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Header() {
  const { cart, setCart } = useContext(CyclesContext)

  useEffect(() => {
    if (cart.length === 0) {
      const object = localStorage.getItem('@coffee-delivery-1.0.0')

      if (object) {
        const parsed = JSON.parse(object)

        setCart(parsed)
      }
    }

    if (cart.length) {
      localStorage.setItem('@coffee-delivery-1.0.0', JSON.stringify(cart))
    }
  }, [cart, setCart])

  return (
    <AlignHeader>
      <HeaderContainer>
        <NavLink title="Home" to="/">
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
              {cart?.length > 0 ? (
                <CartItemsCounter>{cart.length}</CartItemsCounter>
              ) : null}
            </NavLink>
          </ShoppingCartDiv>
        </div>
      </HeaderContainer>
    </AlignHeader>
  )
}
