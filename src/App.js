import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const cinemas = ['Robot', 'Robot2.0', 'Baghi', 'Raowan', 'No 1', 'Hero']

  const actor = [
    {name:"Wav Nick", job:"Cricket", home:"Los Angle", number:"9934264279"},
    {name:"kesi Oyse", job:"Football", home:"Faboniya", number:"6438763783"},
    {name:"Jhon Smith", job:"Badmintion", home:"Las Vegas", number:"325452432345"},
  ]


  
  return (
    <div className="App">
    
        {
          cinemas.map(cinema => <li style={{listStyle: 'none'}}>{cinema}</li>)
        }
   
      <ul>
      </ul>
      
      {
        actor.map(nayok => <People name={nayok.name} job={nayok.job} home={nayok.home} number={nayok.number}>
        </People>)
      }
      <Counter></Counter>
    
      <CommetUser></CommetUser>
    
    
    </div>

    
  );
}
// user api 


function CommetUser(){
      const [user, setUser] = useState([])
      useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
      },[])
  return (
    <div>
      <h1>LoadComment</h1>
      {
        user.map(coments => <Comment  name={coments.name}  email={coments.email}></Comment>)
      }
    </div>
  )

}

function Comment (props){
  return ( 
<div>
<h4>Name:{props.name}</h4>,
  <h2>Email: {props.email}</h2>
</div>
 
  );
}


// counter 
function Counter(){
  const [count, setCount] = useState(0)
const deccrease = () =>{
  if(count > 0){
    const diccreaseCount = count - 1;
    setCount(diccreaseCount)
  }
}
const increase = () =>{
  const increaseCount = count + 1
  setCount(increaseCount)

}
const buttonStyle ={
  backgroundColor:'blue', color:'white', padding:'10px 20px', fontSize:'20px', border:'none', borderRadius:'15px',
marginLeft:'10px',
cursor:'pointer'
}
  return (
    
<div>
<h1 style={{color:'red'}}>Count: {count}</h1>
<button onClick={increase} style={buttonStyle}>Increase</button>
<button onClick={deccrease}style={buttonStyle}>deccrease</button>
</div>
  );
}
// counter 


function People(props){

  const person ={
    textAlign : 'center',
    backgroundColor : 'blue',
    color: 'white',
    padding: '20px',
    margin:' 50px  200px',
    borderRadius : '50px'

  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h2>Job: {props.job}</h2>
      <h2>Home: {props.home}</h2>
      <h2>Address: {props.number}</h2>
    </div>
  );
}

export default App;

/*
     <People name="Wav Nick" job="Cricket" home="Los Angle" number="9934264279"></People>
     <People name="kesi Oyse" job="Football" home="Faboniya" number="6438763783"></People>
     <People name="Jhon Smith" job="Badmintion" home="Las Vegas" number="9934264279"></People>
     <People name="Lak Gack" job="Ludo" home="London" number="9934264279"></People>
   
*/