import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserList from './components/UserList'

function App() {
  return (
    <div className="app">
      <h1 className="app-title">My React App</h1>
      <Greeting name="World" />
      <Counter />
      <UserList />
    </div>
  )
}

export default App
