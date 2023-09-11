import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

function App() {

  const containerStyles = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <Router>
        <div style={containerStyles}>
      <Header />
      <Routes>
      <Route path="/" element={ <HomePage /> } exact />
      <Route path="/coins/:id" element={ <CoinPage /> } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;