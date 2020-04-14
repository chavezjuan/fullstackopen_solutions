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
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts={props.parts} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.parts[0].exercises + 
      props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    /*
    <div>
    
      <Header title={course} />
      <Content name={parts[0].name} number={parts[0].exercises} />
      <Content name={parts[1].name} number={parts[1].exercises} />
      <Content name={parts[2].name} number={parts[2].exercises} />
      <Total total={ parts[0].exercises + parts[1].exercises + parts[2].exercises }/>

    </div>
    */
    <div>
    
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
   


  )
}

ReactDOM.render(<App />, document.getElementById('root'))


