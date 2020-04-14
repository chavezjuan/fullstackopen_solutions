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
  console.log(props)
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
    
      <Header title={course} />
      <Content name={part1.name} number={part1.exercises} />
      <Content name={part2.name} number={part2.exercises} />
      <Content name={part3.name} number={part3.exercises} />
      <Total total={ part1.exercises + part2.exercises + part3.exercises }/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


