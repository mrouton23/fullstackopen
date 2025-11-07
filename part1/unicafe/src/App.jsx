import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setSum (sum + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setSum (sum + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setSum (sum + 1)
  } 

  return (
    <div>
      <div>
        <p><strong>Give Feedback</strong></p>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} sum={sum} />
      </div>
    </div>
  )
}

//button component that displays the feedback
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad, sum}) => {
  if(sum === 0) {
    return (
      <div>No feedback gathered</div>
    )
  } else {
    return (
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value = {neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value={sum} />
      <StatisticLine text="average" value={(good + (bad * -1)) / sum}/>
      <StatisticLine text="positive" value ={good/sum * 100} />
    </div>
    )
  }
}

const Stats = (props) => {
  if(props.sum === 0) {
    return (
      <div>No feedback gathered</div>
    )
  } else {
    return (
    <div>
      <div>Average {(props.good + (props.bad * -1)) / props.sum}</div>
      <div>Positive {props.good/props.sum * 100}%</div>
    </div>
    )
  }
}

export default App