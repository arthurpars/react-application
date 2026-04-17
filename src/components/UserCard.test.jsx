import { render, screen } from '@testing-library/react'
import UserCard from './UserCard'

const post = { id: 1, title: 'My First Post', body: 'This is the body.' }

describe('UserCard', () => {
  test('renders the post title', () => {
    render(<UserCard post={post} />)
    expect(screen.getByText('My First Post')).toBeInTheDocument()
  })

  test('renders the post body', () => {
    render(<UserCard post={post} />)
    expect(screen.getByText('This is the body.')).toHaveTextContent('This is the body.')
  })

  test('renders user card container', () => {
    render(<UserCard post={post} />)
    expect(screen.getByTestId('user-card')).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const { container } = render(<UserCard post={post} />)
    expect(container).toMatchSnapshot()
  })
})
