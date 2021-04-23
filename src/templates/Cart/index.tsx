import { Info } from '@styled-icons/material-outlined/Info'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { Divider } from 'components/Divider'
import ShowCase from 'components/ShowCase'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import CartList, { CartListProps } from 'components/CartList'
import PaymentForm from 'components/PaymentForm'

import * as S from './styles'

export type CartProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <CartList />
          <PaymentForm />
        </S.Content>

        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>

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
