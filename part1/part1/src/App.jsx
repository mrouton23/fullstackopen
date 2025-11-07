const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', count: 10 },
      {name: 'Using props to pass data', count: 7},
      {name: 'State of a component', count: 14}
    ]
  }
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1> 
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> {props.course.parts[0].name} {props.course.parts[0].count} </p>
      <p> {props.course.parts[1].name} {props.course.parts[1].count} </p>
      <p> {props.course.parts[2].name} {props.course.parts[2].count} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {
          props.course.parts[0].count + props.course.parts[1].count + props.course.parts[2].count
        }
      </p>
    </div>
  )
}

export default App