import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Servicos from "./Components/Servicos/Servicos";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Servicos/>
    </div>
  );
}

export default App;
