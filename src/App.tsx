import React, { useState } from 'react';
import './App.css';
import TitleComponent from './TitleComponent'
import Pet from "./Pet"
import PetComponent from './PetComponent'

// const App: React.FC = () => {
//   const [pets, setPets] = useState([new Pet("Kyle", "Dog", "Corgi"), new Pet("Mark", "Cat", "Tortie")])

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <TitleComponent otherText={"Earth"} text={"Goodbye"}/>
//       {
//         pets.map(pet => <PetComponent {...pet}/>)
//       }
      
//     </div>
//   );
// }

interface IState{
  pets: Pet[];
}
class App extends React.PureComponent<any, IState>{
  constructor(props: any){
    super(props);
    this.state = {
      pets: [new Pet("Kyle", "Dog", "Corgi"), new Pet("Mark", "Cat", "Tortie")]
    }
  }

  render(){
    const {pets} = this.state
    return (
      <div className="App">
        <h1>Hello World</h1>
        <TitleComponent otherText={"Earth"} text={"Goodbye"}/>
        {
          pets.map(pet => <PetComponent key={pet.name} {...pet}/>)
        }
        
      </div>
    );
  }
}

export default App;
