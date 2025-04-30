export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-home">
        <img src="src/assets/Nav-Icons/HouseSimple.svg" alt="Home" />
        <a href="/home">Home</a>
      </div>
      <div className="nav-tracking">
        <img src="src/assets/Nav-Icons/Invoice.svg" alt="Tracking" />
        <a href="/home">Tracking</a>
      </div>
      <div className="nav-budget">
        <img src="src/assets/Nav-Icons/Wallet.svg" alt="Budget" />
        <a href="/home">Budget</a>
      </div>
      <div className="nav-rewards">
        <img src="src/assets/Nav-Icons/Trophy.svg" alt="Rewards" />
        <a href="/home">Rewards</a>
      </div>
    </nav>
  );
}
