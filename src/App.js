import './App.css';
import Card from './Card';
import Header from './Header';
import {Data} from './Data';
import { useNavigate } from 'react-router-dom';
function App() {
 const navigate=useNavigate();

  return (
    
    <div className="App">
    <Header/>
    <div className='footer'>
    {Data.fixtures.map((item)=>(
      <div onClick={()=>navigate("/second")}><Card match={item}/></div>
    ))}
    </div>
    </div>
    
  );
}

export default App;
