import { CartItems } from '../CartItems'
import { CartContainer, CartTotal, ConfirmButton } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Cart() {
  const { cart } = useContext(CyclesContext)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  let total = 0

  return (
    <CartContainer>
      {cart.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          count={item.count}
          img={item.img}
          price={item.price}
          type={item.type}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
      <CartTotal>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <h3>Total</h3>
        </div>
        <div>
          <p>
            {
              (cart.map((item) => {
                return (total += item.count * item.price)
              }),
              formatter.format(total))
            }
          </p>
          <p>{cart.length > 0 ? `R$ 3,50` : `R$ 0,00`}</p>
          <h3>
            {cart.length > 0 ? formatter.format((total += 3.5)) : `R$ 0,00`}
          </h3>
        </div>
      </CartTotal>
      <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
    </CartContainer>
  )
}
