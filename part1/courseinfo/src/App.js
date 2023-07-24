const Header = (props) => {
  console.log(props)
  return(
      <h1>{props.course}</h1>
  ) 
}

const Content = (props) => {
  console.log('hi')
  console.log(props)
  return(
    <div>
      <Part part={props.info[0].part} exercises={props.info[0].exercises}/>
      <Part part={props.info[1].part} exercises={props.info[1].exercises}/>
      <Part part={props.info[2].part} exercises={props.info[2].exercises}/>
    </div>      
  )
} 

const Part = (props) =>{
  //console.logs(props)
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p>Number of exercises {props.total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'


  const info = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content info={info}/>
      <Total total={info[0].exercises+info[1].exercises+info[2].exercises}/>
    </div>
  )
}

export default App