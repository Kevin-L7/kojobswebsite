import logo from './logo.svg';
import kojobslogo from './kojobslogo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kojobslogo} className="App-logo" alt="logo" />
        <p>
          Kojobs Website
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/kevin-lee7/"
          target="_blank"
          rel="noopener noreferrer" 
        >
          최고 동아리
        </a>
      </header>
    </div>
  );
}

export default App;


