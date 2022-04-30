import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Servicos from "./Components/Servicos/Servicos";
import Contato from "./Components/Contato/Contato";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Servicos/>
      <Contato/>
    </div>
  );
}

export default App;
