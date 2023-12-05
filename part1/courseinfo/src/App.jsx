const Header = ({ course }) => (
  <h1>{course.name}</h1>
)

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((el, id) => (
        <Part key={id} data={el} />
      ))}
    </div>
  )
}

const Part = ({ data }) => (
  <p>{data.name} {data.exercises}</p>
)

const Total = ({ course }) => {
  const total = course.parts.reduce((prev, curr) => (prev + curr.exercises), 0);

  console.log(total);

  return (
    <p>Number of exercises {total}</p>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
