function UserCard({ post }) {
  return (
    <div className="user-card" data-testid="user-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default UserCard
