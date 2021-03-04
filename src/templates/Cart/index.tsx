import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { Divider } from 'components/Divider'
import ShowCase from 'components/ShowCase'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

import * as S from './styles'

export type CartProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <CartList />
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>

        <Divider />
      </Container>
      <ShowCase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
