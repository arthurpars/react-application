import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting', () => {
  test('renders the greeting heading', () => {
    render(<Greeting name="Alice" />)
    expect(screen.getByRole('heading', { name: 'Hello, Alice!' })).toBeInTheDocument()
  })

  test('renders the correct name', () => {
    render(<Greeting name="Alice" />)
    expect(screen.getByText('Hello, Alice!')).toHaveTextContent('Alice')
  })

  test('renders time of day message', () => {
    render(<Greeting name="Alice" />)
    expect(screen.getByTestId('greeting')).toBeInTheDocument()
    expect(screen.getByText(/Good (morning|afternoon|evening)!/)).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const { container } = render(<Greeting name="Alice" />)
    expect(container).toMatchSnapshot()
  })
})
