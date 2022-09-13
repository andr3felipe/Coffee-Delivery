import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Cart } from '../../components/Cart'
import {
  CheckoutDiv,
  ComplementoInput,
  CompleteYourOrder,
  FormAddres,
  OrderForm,
  PaymentContainer,
  PaymentMethod,
  ShoppingCartItems,
} from './styles'

export function Checkout() {
  return (
    <CheckoutDiv>
      <CompleteYourOrder>
        <h3>Complete seu pedido</h3>
        <OrderForm>
          <FormAddres>
            <h3>
              <MapPinLine size={22} /> Endereço de Entrega
            </h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <form action="">
              <input type="text" title="CEP" placeholder="CEP" />
              <input type="text" title="Rua" placeholder="Rua" />
              <div>
                <input type="text" title="Número" placeholder="Número" />
                <ComplementoInput
                  type="text"
                  title="Complemento"
                  placeholder="Complemento"
                />
                <span></span>
              </div>
              <div>
                <input type="text" title="Bairro" placeholder="Bairro" />
                <input type="text" title="Cidade" placeholder="Cidade" />
                <input type="text" title="UF" placeholder="UF" />
              </div>
            </form>
          </FormAddres>
          <PaymentContainer>
            <h3>
              <CurrencyDollar size={22} /> Pagamento
            </h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <PaymentMethod>
              <div>
                <CreditCard size={16} /> CARTÃO DE CRÉDITO
              </div>
              <div>
                <Bank size={16} /> CARTÃO DE DÉBITO
              </div>
              <div>
                <Money size={16} /> DINHEIRO
              </div>
            </PaymentMethod>
          </PaymentContainer>
        </OrderForm>
      </CompleteYourOrder>
      <ShoppingCartItems>
        <div>
          <h3>Cafés selecionados</h3>
        </div>
        <Cart />
      </ShoppingCartItems>
    </CheckoutDiv>
  )
}
