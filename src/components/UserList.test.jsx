import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import UserList from './UserList'

const mockPosts = [
  { id: 1, title: 'First Post', body: 'Body one.' },
  { id: 2, title: 'Second Post', body: 'Body two.' },
]

describe('UserList', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      })
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('shows loading state initially', async () => {
    render(<UserList />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toHaveTextContent('Loading...')
    await waitFor(() => screen.getByTestId('user-list'))
  })

  test('renders posts after fetch completes', async () => {
    render(<UserList />)
    await waitFor(() => expect(screen.getByText('First Post')).toBeInTheDocument())
    expect(screen.getByText('Second Post')).toBeInTheDocument()
  })

  test('shows page number', async () => {
    render(<UserList />)
    await waitFor(() => screen.getByTestId('user-list'))
    expect(screen.getByTestId('page-number')).toHaveTextContent('Page 1')
  })

  test('Previous button is disabled on first page', async () => {
    render(<UserList />)
    await waitFor(() => screen.getByTestId('user-list'))
    expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled()
  })

  test('Next button advances the page', async () => {
    render(<UserList />)
    await waitFor(() => screen.getByTestId('user-list'))
    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    await waitFor(() => expect(screen.getByTestId('page-number')).toHaveTextContent('Page 2'))
  })

  test('Previous button goes back a page', async () => {
    render(<UserList />)
    await waitFor(() => screen.getByTestId('user-list'))
    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    await waitFor(() => expect(screen.getByTestId('page-number')).toHaveTextContent('Page 2'))
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }))
    await waitFor(() => expect(screen.getByTestId('page-number')).toHaveTextContent('Page 1'))
  })

  test('matches snapshot after loading', async () => {
    const { container } = render(<UserList />)
    await waitFor(() => screen.getByTestId('user-list'))
    expect(container).toMatchSnapshot()
  })
})
