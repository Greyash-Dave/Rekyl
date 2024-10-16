import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Market from './components/RecyclMarketplace'; // Assuming you have this component
import Login from './components/Login'; // Assuming you have this component
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        {/* <Route path="/sell" element={<Sell />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
