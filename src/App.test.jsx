import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import useCounterStore from './store/counterStore'

describe('App', () => {
  beforeEach(() => {
    useCounterStore.getState().reset()
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('renders the greeting', () => {
    render(<App />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  test('renders the counter', () => {
    render(<App />)
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0')
  })

  test('renders Increment and Decrement buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeInTheDocument()
  })

  test('calls fetch for users', async () => {
    render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
  })

  test('matches snapshot', async () => {
    const { container } = render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
    expect(container).toMatchSnapshot()
  })
})
