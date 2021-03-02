import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Morpa" />)

    expect(screen.getByText(/morpa/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Morpa" />)

    userEvent.click(screen.getByText(/morpa/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
