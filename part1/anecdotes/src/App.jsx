import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Text = ({ data }) => {
  const { anecdotes, selected, popular, text, votes } = data;
  return (
    <>
      <h2>{text}</h2>
      {selected >= 0 ? anecdotes[selected] : anecdotes[popular.id]}
      {selected >= 0 && <p>has {votes[selected] ? votes[selected] : 0} votes</p>}
      {popular
        ? votes[popular.id]
          ? <p>has {votes[popular.id]} votes</p>
          : <p>no votes yet</p>
        : null
      }
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const [popular, setPopular] = useState({ value: '', id: '' });

  const handlerSelected = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 0) + 0);
    setSelected(random);
  }

  const handlerVote = () => {
    const value = votes[selected] + 1 || 1;
    setVotes({
      ...votes,
      [selected]: value
    })

    if (value > popular.value) {
      setPopular({
        value,
        id: selected
      })
    }
  }

  return (
    <div>
      <Text data={{ votes, anecdotes, selected, text: "Anecdote of the day" }} />
      <div>
        <Button onClick={handlerVote} text="vote" />
        <Button onClick={handlerSelected} text="next anecdotes" />
      </div>
      <Text data={{ votes, anecdotes, popular, text: "Anecdote of the day" }} />
    </div>
  )
}

export default App