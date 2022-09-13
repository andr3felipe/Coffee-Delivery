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

import { SVGS } from '../../SVGS/SVGS'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Products } from '../../components/Products'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Home() {
  const { products } = useContext(CyclesContext)

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
        <img src={SVGS.CoffeeCup} alt="" />
      </Intro>

      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ProductsAlign>
          {products.map((product) => (
            <Products
              key={product.id}
              id={product.id}
              count={product.count}
              img={product.img}
              price={product.price}
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
