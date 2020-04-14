import React from 'react';
import ReactDOM from 'react-dom';

//Components
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.name} exercises={props.number} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    
      <Header title={course} />
      <Content name={part1} number={exercises1} />
      <Content name={part2} number={exercises2} />
      <Content name={part3} number={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


