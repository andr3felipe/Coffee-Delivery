import { CartItem, CartItemAlign, RemoveButton } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

interface CartItemsProps {
  id: number
  count: number
  img: string
  price: number
  type: string[]
  title: string
  subTitle: string
}

export function CartItems({
  id,
  count,
  img,
  price,
  type,
  title,
  subTitle,
}: CartItemsProps) {
  const { setCart, cart } = useContext(CyclesContext)

  function handleCartCountPlus() {
    setCart((state) =>
      state.map((item) => {
        if (item.id === id) {
          return { ...item, count: count + 1 }
        } else {
          return item
        }
      }),
    )
  }

  function handleCartCountMinus() {
    setCart((state) =>
      state.map((item) => {
        if (item.id === id && item.count > 1) {
          return { ...item, count: count - 1 }
        } else {
          return item
        }
      }),
    )
  }

  function handleRemoveFromCart() {
    if (cart.length === 1) {
      localStorage.removeItem('@coffee-delivery-1.0.0')
      setCart((state) => state.filter((item) => item.id !== id))
    } else {
      setCart((state) => state.filter((item) => item.id !== id))
    }
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <CartItem>
      <div>
        <img src={img} alt="" />
        <div>
          <h4>{title}</h4>
          <CartItemAlign>
            <div>
              <button title="-" type="button" onClick={handleCartCountMinus}>
                <Minus size={14} weight="bold" />
              </button>

              {count}
              <button title="+" type="button" onClick={handleCartCountPlus}>
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <RemoveButton type="button" onClick={handleRemoveFromCart}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </CartItemAlign>
        </div>
      </div>
      <h4>R$ {formatter.format(price * count)}</h4>
    </CartItem>
  )
}
