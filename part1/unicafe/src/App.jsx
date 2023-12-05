import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Title = ({ text }) => <h1>{text}</h1>;

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}{text === "positive" ? "%" : null}</td></tr>;

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) return <p>No feedback given</p>
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGoodState = () => setGood(good + 1);
  const handlerNeutralState = () => setNeutral(neutral + 1);
  const handlerBadState = () => setBad(bad + 1);

  const total = good + neutral + bad || 0;
  const average = (good - bad) / total || 0;
  const positive = (good / total) * 100 || '';

  return (
    <div>
      <Title text={'give feedback'} />
      <Button onClick={handlerGoodState} text={'good'} />
      <Button onClick={handlerNeutralState} text={'neutral'} />
      <Button onClick={handlerBadState} text={'bad'} />
      <Title text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average} positive={positive} />
    </div>
  )
}

export default App