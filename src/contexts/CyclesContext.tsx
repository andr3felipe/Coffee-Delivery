import { createContext, ReactNode, useState } from 'react'
import { SVGS } from '../SVGS/SVGS.js'

interface Coffee {
  id: number
  count: number
  img: string
  price: number
  type: string[]
  title: string
  subTitle: string
}

interface CyclesContextType {
  cart: Coffee[]
  setCart: React.Dispatch<React.SetStateAction<Coffee[]>>
  products: Coffee[]
  setProducts: React.Dispatch<React.SetStateAction<Coffee[]>>
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cart, setCart] = useState([
    {
      id: 1,
      count: 5,
      img: SVGS.TraditionalExpress,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
    },
  ])

  const [products, setProducts] = useState([
    {
      id: 1,
      count: 1,
      img: SVGS.TraditionalExpress,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: 2,
      count: 1,
      img: SVGS.AmericanExpress,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL'],
      title: 'Expresso Americano',
      subTitle: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: 3,
      count: 1,
      img: SVGS.CreamyExpress,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL'],
      title: 'Expresso Cremoso',
      subTitle: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: 4,
      count: 1,
      img: SVGS.IceExpress,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'GELADO'],
      title: 'Expresso Gelado',
      subTitle: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: 5,
      count: 1,
      img: SVGS.CoffeeWithMilk,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Café com Leite',
      subTitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: 6,
      count: 1,
      img: SVGS.Latte,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Latte',
      subTitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: 7,
      count: 1,
      img: SVGS.Capuccino,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Capuccino',
      subTitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: 8,
      count: 1,
      img: SVGS.Macchiato,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Macchiato',
      subTitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: 9,
      count: 1,
      img: SVGS.Mocaccino,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Mocaccino',
      subTitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: 10,
      count: 1,
      img: SVGS.HotMilk,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Chocolate Quente',
      subTitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: 11,
      count: 1,
      img: SVGS.Cubano,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      title: 'Cubano',
      subTitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: 12,
      count: 1,
      img: SVGS.Havaiano,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['ESPECIAL'],
      title: 'Havaiano',
      subTitle: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      id: 13,
      count: 1,
      img: SVGS.Arabe,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['ESPECIAL'],
      title: 'Árabe',
      subTitle: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: 14,
      count: 1,
      img: SVGS.Irlandes,
      // eslint-disable-next-line prettier/prettier
      price: 9.90,
      type: ['ESPECIAL', 'ALCOÓLICO'],
      title: 'Irlandês',
      subTitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ])

  return (
    <CyclesContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </CyclesContext.Provider>
  )
}
