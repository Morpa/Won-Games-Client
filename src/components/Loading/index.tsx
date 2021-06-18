import Image from 'next/image'
import * as S from './styles'

const Loading = () => (
  <S.Wrapper>
    <Image
      src="/img/loading.gif"
      alt="Loading more games"
      role="img"
      width={60}
      height={60}
    />
    <S.Description>Loading...</S.Description>
  </S.Wrapper>
)

export default Loading
