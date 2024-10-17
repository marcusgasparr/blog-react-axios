import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./css/App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <footer>
        <p>Projeto desenvolvido pelo Marcus Gaspar</p>
      </footer>
    </div>
  );
}

export default App;
