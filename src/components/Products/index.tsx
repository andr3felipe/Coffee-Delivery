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

interface ProductsProps {
  id: number
  type: string[]
  title: string
  subTitle: string
  img?: string
}

export function Products({ id, type, title, subTitle, img }: ProductsProps) {
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
          <span>R$ </span>9,90
        </Price>
        <ProductCount>
          <Minus size={14} color="#8047F8" weight="bold" />
          <span>1</span>
          <Plus size={14} color="#8047F8" weight="bold" />
        </ProductCount>
        <ShoppingCartIcon>
          <ShoppingCartSimple size={22} weight="fill" />
        </ShoppingCartIcon>
      </PriceAlign>
    </BaseCard>
  )
}
