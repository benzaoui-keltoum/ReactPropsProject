import './App.css';
import Profile  from './profile/Profile';
import fl from  './profile/flow.jpg'

function App() {
  const handleName = fullName => alert(fullName);
  
  return (
  <div className="App">

  <Profile fullName="keltoum" profession="web developer" bio="algerian"  handleName={handleName}> <img src={fl} alt="snwo1"></img>
   </Profile>


      </div>
  );
}

export default App;
