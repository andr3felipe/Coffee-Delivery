import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  WarningCircle,
} from 'phosphor-react'

import styles from './styles.module.css'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

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
  FormOld,
  ComplementoDiv,
} from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const stringRegex = /[A-Za-z]/g

const FormValidationSchema = zod.object({
  CEP: zod.string().length(8, 'Insira o CEP que deve conter 8 dígitos.'),
  Rua: zod.string().min(1, 'Insira a Rua.'),
  Número: zod.string().min(1, 'Insira o Número.'),
  Complemento: zod.string(),
  Bairro: zod.string().min(3, 'Insira o Bairro.'),
  Cidade: zod.string().min(3, 'Insira a Cidade.'),
  UF: zod
    .string()
    .length(2, 'Insira o Estado com 2 letras.')
    .regex(stringRegex),
  Payment: zod.string(),
})

type FormValidationSchemaType = zod.infer<typeof FormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { setAddress, setCart } = useContext(CyclesContext)

  const { register, handleSubmit, watch, formState } =
    useForm<FormValidationSchemaType>({
      resolver: zodResolver(FormValidationSchema),
    })

  const message = {
    CEP: formState.errors.CEP?.message,
    Rua: formState.errors.Rua?.message,
    Número: formState.errors.Número?.message,
    Complemento: formState.errors.Complemento?.message,
    Bairro: formState.errors.Bairro?.message,
    Cidade: formState.errors.Cidade?.message,
    UF: formState.errors.UF?.message,
    Payment: formState.errors.Payment?.message,
  }

  function handleFormSubmit(data: FormValidationSchemaType) {
    console.log('data', data)

    const object = data

    setAddress(object)
    localStorage.removeItem('@coffee-delivery-1.0.0')
    setCart([])
    navigate('/checkout/success')
  }

  const paymentMethod = watch('Payment')

  return (
    <CheckoutDiv>
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <CompleteYourOrder>
          <h3>Complete seu pedido</h3>
          <OrderForm>
            <FormAddres>
              <h3>
                <MapPinLine size={22} /> Endereço de Entrega
              </h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
              <FormOld>
                <div>
                  <input
                    maxLength={8}
                    type="text"
                    title="CEP"
                    placeholder="CEP"
                    {...register('CEP')}
                  />
                  {message.CEP && (
                    <div title={message.CEP}>
                      <WarningCircle size={20} weight="bold" />
                    </div>
                  )}
                </div>

                <div>
                  <input
                    maxLength={30}
                    type="text"
                    title="Rua"
                    placeholder="Rua"
                    {...register('Rua')}
                  />
                  {message.Rua && (
                    <div title={message.Rua}>
                      <WarningCircle size={20} weight="bold" />
                    </div>
                  )}
                </div>

                <div>
                  <div>
                    <input
                      maxLength={8}
                      type="text"
                      title="Número"
                      placeholder="Número"
                      {...register('Número')}
                    />
                    {message.Número && (
                      <div title={message.Número}>
                        <WarningCircle size={20} weight="bold" />
                      </div>
                    )}
                  </div>
                  <ComplementoDiv>
                    <ComplementoInput
                      maxLength={20}
                      type="text"
                      title="Complemento"
                      placeholder="Complemento"
                      {...register('Complemento')}
                    />
                    <span></span>
                  </ComplementoDiv>
                </div>
                <div>
                  <div>
                    <input
                      maxLength={20}
                      type="text"
                      title="Bairro"
                      placeholder="Bairro"
                      {...register('Bairro')}
                    />
                    {message.Bairro && (
                      <div title={message.Bairro}>
                        <WarningCircle size={20} weight="bold" />
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      maxLength={20}
                      type="text"
                      title="Cidade"
                      placeholder="Cidade"
                      {...register('Cidade')}
                    />
                    {message.Cidade && (
                      <div title={message.Cidade}>
                        <WarningCircle size={20} weight="bold" />
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      maxLength={2}
                      type="text"
                      title="UF"
                      placeholder="UF"
                      {...register('UF')}
                    />
                    {message.UF && (
                      <div title={message.UF}>
                        <WarningCircle size={20} weight="bold" />
                      </div>
                    )}
                  </div>
                </div>
              </FormOld>
            </FormAddres>
            <PaymentContainer>
              <h3>
                <CurrencyDollar size={22} /> Pagamento
              </h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
              <PaymentMethod>
                <label htmlFor="credit">
                  <div
                    className={
                      paymentMethod === 'Cartão de Crédito'
                        ? styles.paymentChoice
                        : ''
                    }
                  >
                    <input
                      type="radio"
                      value="Cartão de Crédito"
                      id="credit"
                      {...register('Payment')}
                    />
                    <CreditCard size={16} /> CARTÃO DE CRÉDITO
                  </div>
                </label>

                <label htmlFor="debito">
                  <div
                    className={
                      paymentMethod === 'Cartão de Débito'
                        ? styles.paymentChoice
                        : ''
                    }
                  >
                    <input
                      type="radio"
                      value="Cartão de Débito"
                      id="debito"
                      {...register('Payment')}
                    />
                    <Bank size={16} /> CARTÃO DE DÉBITO
                  </div>
                </label>

                <label htmlFor="dinheiro">
                  <div
                    className={
                      paymentMethod === 'Dinheiro' ? styles.paymentChoice : ''
                    }
                  >
                    <input
                      type="radio"
                      value="Dinheiro"
                      id="dinheiro"
                      {...register('Payment')}
                    />
                    <Money size={16} /> DINHEIRO
                  </div>
                </label>
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
      </form>
    </CheckoutDiv>
  )
}
