// RecyclMarketplace.jsx
import React, { useState } from 'react';
import './RecyclMarketplace.css';

const RecycleCard = ({ title, description, tokens, image }) => (
  <div className="recycle-card">
    <div className="card-header">
      <h3>{title}</h3>
      <span className="token-badge">{tokens} Recyclo Tokens</span>
    </div>
    <p className="card-description">{description}</p>
    <img src={image} alt={title} className="card-image" />
    <div className="card-footer">
      <button className="btn btn-outline">Learn More</button>
      <button className="btn btn-primary">Start Recycling</button>
    </div>
  </div>
);

const ProductCard = ({ title, price, tokens, image, description }) => (
  <div className="product-card">
    <div className="card-header">
      <h3>{title}</h3>
      <div className="price-container">
        <span className="token-badge">{tokens} Tokens</span>
        <span className="price"> ₹{price}</span>
      </div>
    </div>
    <p className="card-description">{description}</p>
    <img src={image} alt={title} className="card-image" />
    <div className="card-footer">
      <button className="btn btn-outline">Details</button>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
);

const RecyclingOptions = [
  {
    title: "Food Waste",
    description: "Convert your kitchen scraps into valuable compost",
    tokens: 50,
    image: "./food.jpg"
  },
  {
    title: "E-Waste",
    description: "Responsibly dispose of electronic devices",
    tokens: 100,
    image: "./ewaste.jpg"
  },
  {
    title: "Plastic Recycling",
    description: "Turn plastic waste into new products",
    tokens: 75,
    image: "./plastic.jpg"
  }
];

const SustainableProducts = [
  {
    title: "Recycled Notebook",
    description: "Made from 100% recycled paper",
    price: 'xx',
    tokens: 100,
    image: "./notebook.jpg"
  },
  {
    title: "Eco-Friendly Water Bottle",
    description: "Created from recycled materials",
    price: 'xx',
    tokens: 200,
    image: "./bottle.jpg"
  },
  {
    title: "Upcycled Tote Bag",
    description: "Fashionable bag made from recycled fabrics",
    price: 'xx',
    tokens: 150,
    image: "./bag.jpg"
  }
];

export default function RekylMarketplace() {
  const [activeTab, setActiveTab] = useState('recycle');
  const [tokenBalance] = useState(500);

  return (
    <div className="marketplace">
      <div className="marketplace-container">
        <div className="header">
          <div className="title-section">
            <h1>Rekyl Marketplace</h1>
            <p>Recycle, Earn, Shop Sustainably</p>
          </div>
          <div className="user-actions">
            <span className="balance-badge">
              {tokenBalance} Recyclo Tokens
            </span>
            <button className="btn btn-outline cart-btn">
              🛒
            </button>
          </div>
        </div>

        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'recycle' ? 'active' : ''}`}
            onClick={() => setActiveTab('recycle')}
          >
            ♻️ Recycle & Earn
          </button>
          <button 
            className={`tab-btn ${activeTab === 'shop' ? 'active' : ''}`}
            onClick={() => setActiveTab('shop')}
          >
            🛍️ Shop Sustainable
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'recycle' && (
            <div className="card-grid">
              {RecyclingOptions.map((option, index) => (
                <RecycleCard key={index} {...option} />
              ))}
            </div>
          )}

          {activeTab === 'shop' && (
            <div className="card-grid">
              {SustainableProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          )}
        </div>

        <div className="impact-section">
          <div className="impact-content">
            <div>
              <h2>Your Environmental Impact</h2>
              <p>You've helped reduce 250kg of CO2 emissions</p>
            </div>
            <button className="btn btn-primary">
              View Impact Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}