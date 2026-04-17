import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'
import useCounterStore from '../store/counterStore'

describe('Counter', () => {
  beforeEach(() => {
    useCounterStore.getState().reset()
  })

  test('renders initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByTestId('count-display')).toBeInTheDocument()
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0')
  })

  test('has Increment and Decrement buttons', () => {
    render(<Counter />)
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeInTheDocument()
  })

  test('increments count when Increment is clicked', () => {
    render(<Counter />)
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }))
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 1')
  })

  test('decrements count when Decrement is clicked', () => {
    render(<Counter />)
    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }))
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: -1')
  })

  test('matches snapshot', () => {
    const { container } = render(<Counter />)
    expect(container).toMatchSnapshot()
  })
})
