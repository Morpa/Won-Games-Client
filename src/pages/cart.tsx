import { initializeApollo } from 'utils/apollo'
import { queryRecommended } from 'graphql/generated/queryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import { gamesMapper, highlightMapper } from 'utils/mappers'

import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<queryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      total: 'R$390,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
