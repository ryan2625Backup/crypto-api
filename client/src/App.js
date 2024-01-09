import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndividualCoin from './Pages/IndividualCoin';
import Main from './Pages/MainPage';
import Login from './Pages/Login';
import Footer from "./components/footer/Footer"

function App() {

  const [id, setId] = useState(null);

  return (
    <div className="hello">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setId={setId} />} />
          <Route path="/coins/:id" element={<IndividualCoin id={id}/>} />
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
