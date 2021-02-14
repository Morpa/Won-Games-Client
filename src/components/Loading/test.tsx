import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Loading />)

    expect(
      screen.getByRole('img', {
        name: /Loading more games/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
