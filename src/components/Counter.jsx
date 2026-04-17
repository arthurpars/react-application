import useCounterStore from '../store/counterStore'

function Counter() {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div className="counter" data-testid="counter">
      <p data-testid="count-display">Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
