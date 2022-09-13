import { CartItem, CartItemAlign, RemoveButton } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function CartItems({ id, count, img, price, type, title, subTitle }) {
  const { cart, setCart } = useContext(CyclesContext)

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
    setCart((state) => state.filter((item) => item.id !== id))
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
