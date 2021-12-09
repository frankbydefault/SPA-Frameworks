import logo from './assets/img/logo.svg';
import './assets/css/App.css';
//importando componente
import ComponentePractica from './Components/ComponentePractica';
import Peliculas from './Components/Peliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      <section className= "Componentes"> 
      
      <ComponentePractica/>
      <Peliculas/>

      </section> 

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>



    </div>
  );
}

export default App;
