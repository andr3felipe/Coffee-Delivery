import {
  BaseCard,
  Price,
  PriceAlign,
  ProductCount,
  ShoppingCartIcon,
  Type,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

interface ProductsProps {
  id: number
  count: number
  img: string
  price: number
  type: string[]
  title: string
  subTitle: string
}

export function Products({
  id,
  count,
  img,
  price,
  type,
  title,
  subTitle,
}: ProductsProps) {
  const { setProducts, cart, setCart } = useContext(CyclesContext)

  function handleCountPlus() {
    setProducts((state) =>
      state.map((item) => {
        if (item.id === id) {
          return { ...item, count: count + 1 }
        } else {
          return item
        }
      }),
    )
  }

  function handleCountMinus() {
    if (count) {
      setProducts((state) =>
        state.map((item) => {
          if (item.id === id) {
            return { ...item, count: count - 1 }
          } else {
            return item
          }
        }),
      )
    }
  }

  function handleAddCart() {
    const object = {
      id,
      count,
      img,
      price,
      type,
      title,
      subTitle,
    }

    const alreadyInCart = cart.filter((item) => item.id === id)

    if (alreadyInCart.length === 1) {
      setCart((state) =>
        state.map((item) => {
          if (item.id === id) {
            return { ...item, count: count + alreadyInCart[0].count }
          } else {
            return item
          }
        }),
      )
    } else if (count) {
      setCart((state) => [...state, object])
    }
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <BaseCard>
      <img src={img} alt="" />
      <Type>
        {type.map((type) => (
          <span key={uuidv4()}>{type}</span>
        ))}
      </Type>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <PriceAlign>
        <Price>
          <span>R$ </span>
          {formatter.format(price)}
        </Price>
        <ProductCount>
          <button type="button" title="Minus">
            <Minus size={14} weight="bold" onClick={handleCountMinus} />
          </button>

          <span>{count}</span>

          <button type="button" title="Plus">
            <Plus size={14} weight="bold" onClick={handleCountPlus} />
          </button>
        </ProductCount>
        <ShoppingCartIcon onClick={handleAddCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </ShoppingCartIcon>
      </PriceAlign>
    </BaseCard>
  )
}
