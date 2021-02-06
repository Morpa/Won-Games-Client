import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    max-width: 20%;

    ${media.lessThan('medium')`
      min-width:22rem
  `};
  }
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`
