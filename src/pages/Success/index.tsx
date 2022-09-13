import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderConfirmed, SuccessContainer } from './styles'
import Illustration from '../../assets/illustration.svg'

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, n.° 102</strong>{' '}
              Farrapos - Porto Alegre, RS
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
              Pagamento na entrega <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </OrderConfirmed>
      <img src={Illustration} alt="" />
    </SuccessContainer>
  )
}
