import Link from 'next/link'

import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: number
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total! > 0 ? formatPrice(total!) : total}</S.Total>

          {hasButton && (
            <Link href="/cart">
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <>
        <Empty
          title="Your cart is empty"
          description="Go back to store and explore great games and offers."
          hasLink
        />
      </>
    )}
  </S.Wrapper>
)

export default CartList
