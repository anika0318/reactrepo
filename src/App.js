
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
{/* <Navbar title="Tutorial-2" Abouttext="About Us"/> */}
<Navbar title="Tutorial-2" Abouttext="About Us" />
<div className='container'>
<Textform heading="Enter the text to analysis"/>
</div>


    </>
  );
}

export default App;
