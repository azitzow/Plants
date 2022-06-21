import '../App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App w-screen h-screen bg-green-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
