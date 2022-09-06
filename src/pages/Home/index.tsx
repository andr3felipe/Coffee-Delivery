import {
  FeaturesAlign,
  FeaturesCart,
  FeaturesCoffee,
  FeaturesPackage,
  FeaturesTimer,
  HomeContainer,
  Intro,
  IntroAlign,
  ProductsAlign,
  ProductsContainer,
} from './styles'

// SVGS
import CoffeeCup from '../../assets/coffee-cup.svg'
import TraditionalExpress from '../../assets/traditional-express.svg'
import AmericanExpress from '../../assets/american-express.svg'
import CreamyExpress from '../../assets/creamy-express.svg'
import IceExpress from '../../assets/ice-express.svg'
import CoffeeWithMilk from '../../assets/coffee-with-milk.svg'
import Latte from '../../assets/latte.svg'
import Capuccino from '../../assets/capuccino.svg'
import Macchiato from '../../assets/macchiato.svg'
import Mocaccino from '../../assets/mocaccino.svg'
import HotMilk from '../../assets/hot-milk.svg'
import Cubano from '../../assets/cubano.svg'
import Havaiano from '../../assets/havaiano.svg'
import Arabe from '../../assets/arabe.svg'
import Irlandes from '../../assets/irlandes.svg'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Products } from '../../components/Products'
import { useState } from 'react'

export function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: TraditionalExpress,
      type: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: 2,
      img: AmericanExpress,
      type: ['TRADICIONAL'],
      title: 'Expresso Americano',
      subTitle: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: 3,
      img: CreamyExpress,
      type: ['TRADICIONAL'],
      title: 'Expresso Cremoso',
      subTitle: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: 4,
      img: IceExpress,
      type: ['TRADICIONAL', 'GELADO'],
      title: 'Expresso Gelado',
      subTitle: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: 5,
      img: CoffeeWithMilk,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Café com Leite',
      subTitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: 6,
      img: Latte,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Latte',
      subTitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: 7,
      img: Capuccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Capuccino',
      subTitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: 8,
      img: Macchiato,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Macchiato',
      subTitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: 9,
      img: Mocaccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Mocaccino',
      subTitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: 10,
      img: HotMilk,
      type: ['TRADICIONAL', 'COM LEITE'],
      title: 'Chocolate Quente',
      subTitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: 11,
      img: Cubano,
      type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      title: 'Cubano',
      subTitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: 12,
      img: Havaiano,
      type: ['ESPECIAL'],
      title: 'Havaiano',
      subTitle: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      id: 13,
      img: Arabe,
      type: ['ESPECIAL'],
      title: 'Árabe',
      subTitle: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: 14,
      img: Irlandes,
      type: ['ESPECIAL', 'ALCOÓLICO'],
      title: 'Irlandês',
      subTitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ])
  return (
    <HomeContainer>
      <Intro>
        <IntroAlign>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <FeaturesAlign>
            <FeaturesCart>
              <div>
                <ShoppingCart size={16} weight="fill" />
                Compra simples e segura
              </div>
            </FeaturesCart>
            <FeaturesPackage>
              <div>
                <Package size={16} weight="fill" />
                Embalagem mantém o café intacto
              </div>
            </FeaturesPackage>
            <FeaturesTimer>
              <div>
                <Timer size={16} weight="fill" />
                Entrega rápida e rastreada
              </div>
            </FeaturesTimer>
            <FeaturesCoffee>
              <div>
                <Coffee size={16} weight="fill" />O café chega fresquinho até
                você
              </div>
            </FeaturesCoffee>
          </FeaturesAlign>
        </IntroAlign>
        <img src={CoffeeCup} alt="" />
      </Intro>

      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ProductsAlign>
          {products.map((product) => (
            <Products
              key={product.id}
              id={product.id}
              img={product.img}
              type={product.type}
              title={product.title}
              subTitle={product.subTitle}
            />
          ))}
        </ProductsAlign>
      </ProductsContainer>
    </HomeContainer>
  )
}
