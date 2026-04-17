import { formatGreeting, getTimeOfDay } from '../utils/helpers'

function Greeting({ name }) {
  return (
    <div className="greeting" data-testid="greeting">
      <h2>{formatGreeting(name)}</h2>
      <p>Good {getTimeOfDay()}!</p>
    </div>
  )
}

export default Greeting
