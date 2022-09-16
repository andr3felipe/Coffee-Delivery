import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderConfirmed, SuccessContainer } from './styles'
import Delivery from '../../assets/delivery.svg'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Success() {
  const { address } = useContext(CyclesContext)

  return (
    <SuccessContainer>
      <OrderConfirmed>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <div>
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              Entrega em
              <strong>
                {' '}
                {address.Rua}, n.° {address.Número}{' '}
              </strong>
              {address.Bairro} - {address.Cidade}, {address.UF.toUpperCase()}
            </div>
          </div>
          <div>
            <Timer size={16} weight="fill" />
            <div>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <CurrencyDollar size={16} />
            <div>
              Pagamento na entrega <strong> {address.Payment}</strong>
            </div>
          </div>
        </div>
      </OrderConfirmed>
      <img src={Delivery} alt="" />
    </SuccessContainer>
  )
}
