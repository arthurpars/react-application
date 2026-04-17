import { useState, useEffect } from 'react'
import UserCard from './UserCard'

function UserList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [pageIndex])

  if (loading) return <p data-testid="loading">Loading...</p>

  return (
    <div className="user-list" data-testid="user-list">
      {posts.map((post) => (
        <UserCard key={post.id} post={post} />
      ))}
      <div className="pagination">
        <button onClick={() => setPageIndex((p) => p - 1)} disabled={pageIndex === 1}>
          Previous
        </button>
        <span data-testid="page-number">Page {pageIndex}</span>
        <button onClick={() => setPageIndex((p) => p + 1)}>Next</button>
      </div>
    </div>
  )
}

export default UserList
