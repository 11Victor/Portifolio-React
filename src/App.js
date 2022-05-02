import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Servicos from "./Components/Servicos/Servicos";
import Contato from "./Components/Contato/Contato";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const override = css`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    
    <div className="App">

          {loading ? (
          <HashLoader size={150} color={'#FCA61F'} loading={loading} css={override}/>
        ) : (
          <>
          <Navbar/>
          <Intro/>
          <Servicos/>
          <Contato/>
          <ToastContainer/>
          </>
        )
      }

    </div>
  );
}

export default App;
