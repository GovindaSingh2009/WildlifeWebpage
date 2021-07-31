import logo from './wildlife.PNG';
import './App.css';
import ClickButton from './Components/ClickButton';
import RespOfButton from './Components/RespOfButton';
import StylingConcept from './Components/Styling';
import Styles from './appStyle.Module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className = {Styles.headcolor}> KBR National Park</h1>  {/* CSS Module styling*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to KBR National Park
        </p>
        <a
          className="App-link"
          href="http://kbrnp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit website for more info..
        </a>
        <ClickButton animal = "Tigers"  result ={RespOfButton} />
        <RespOfButton />
        <StylingConcept primary1 = {true} />
      </header>
    </div>
  );
}

export default App;
