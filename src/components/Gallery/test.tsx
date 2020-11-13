import { render, screen } from '@testing-library/react'

import Gallery from '.'

describe('<Galery />', () => {
  it('should render the heading', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { name: /Galery/i })).toBeInTheDocument()
  })
})
