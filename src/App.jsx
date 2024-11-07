import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx'
import Temperature from './pages/Temperature.jsx';
import NoPage from "./pages/NoPage";
import Home from "./pages/Home.jsx";
import Weight from './pages/Weight.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/temp" element={<Temperature />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
