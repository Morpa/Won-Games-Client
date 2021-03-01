import { render, screen } from 'utils/test-utils'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(<CartList items={mockItems} total={330} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('$330.00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={mockItems} total={330} hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there ate no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()

    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
