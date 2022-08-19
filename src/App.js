import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__container">
          <img src="../images/illustration-hero.svg" alt="illustration..."
          className='hero' />
          <div className="body__message">
            <h2>Order Summary </h2>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className="price__box">
              <img src="../images/icon-music.svg" alt="Icon-music" />
              <div className="annual__plan__box">
                <p>Annual Plan</p>
                <span className='price'>$59.99/year</span>
              </div>
              <a href="chngeme.com" className='anchor'>Change</a>
            </div>
            <button>Proceed to Payment</button>
            <span>Cancel Order</span>
          </div>
      </div>
    </div>
  );
}

export default App;
