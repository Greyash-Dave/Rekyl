import './Home.css';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSell = () => {
    navigate('/sell'); // Navigate to the login page
  };

  return (
    <div className="home-container">
      <section className="hero">
        <h2>Transform Your Recycling Efforts into Rewards!</h2>
        <p>Join Rekyl and earn "Recyclo" tokens while making a positive impact on the planet.</p>
        <button className="cta-button" onClick={handleLoginClick}>Start Recycling Today</button>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-item">
          <h3>Eco-Conscious Rewards</h3>
          <p>Earn Recyclo tokens for every recyclable you contribute.</p>
        </div>
        <div className="feature-item">
          <h3>Secure Transactions</h3>
          <p>Blockchain technology ensures secure and transparent management of your rewards.</p>
        </div>
        <div className="feature-item">
          <h3>Impact Tracking</h3>
          <p>Monitor your contributions and track your carbon footprint reduction.</p>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <p>Rekyl connects users with certified recycling companies to simplify the recycling process.</p>
        <p>Earn tokens through our dual payment system: spend them on sustainable products or cash out.</p>
      </section>

      <section id="get-started" className="get-started">
        <h2>Get Started</h2>
        <p>Sign up today and be a part of the sustainable revolution!</p>
        <button className="cta-button" onClick={handleLoginClick}>Join Rekyl</button>
      </section>
    </div>
  );
}

export default Home;
