import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './components/Home';
import Call from './components/Call';
import Header from './components/Header';

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/:id" element={<Call/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
