import './App.css'
import Todo from './components/Todo'
import Button from './components/Button'


// function ListItem(props) {
// 	return <li>{props.animal}</li>;
// }

function List1(props){
  if(!props.animals){
    return <div>Loading ...</div>
  }
  if(props.animals.length === 0){
    return <div>There are no animals here</div>
  }
  return(
    <ul>
      {props.animals.map((animal, index) => {
        // ! Use index in case of duplicate values or if the value cannot be accessed via direct reference
        // ! or if the values will remain fixed
        // return animal.startsWith("L") ? <li key={index}>{animal}</li> : null
        return <li key={index}>{animal}</li>
      })}
    </ul>
  )
}

// * props is an object with the property of animals
function List(props){

  return(
    // <>
    //   {!props.animals ? (
    //   <div>Loading...</div>
    // ) : props.animals.length > 0 ? (
    //   <ul>
    //     {props.animals.map((animal) =>{
    //       return <li key={animal}>{animal}</li>
    //     })}
    //   </ul>
    //   ) : (
    //     <div>There are no animals here</div>
    //   )}
    // </>
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map(animal =>{
            return <li key={animal}>{animal}</li>
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There are no animals here.</div>}
    </>
  )
}

function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Deer']
  // const alist = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animal List</h1>
      <ul>
        {/* {animals.map(animal =>{
          return <li key={animal}>{animal}</li>
        })} */}
        {/* {alist} */}
        <List1 animals={animals}/>
        <List animals = {animals}/>
      </ul>
      <Todo />
      <Button color="blue" fontSize="12" text="Hello There" backColor=""/>
    </div>
  )
}
// Test Fedora
export default App
