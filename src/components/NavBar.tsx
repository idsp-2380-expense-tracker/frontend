import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-home">
        <img src="src/assets/Nav-Icons/HouseSimple.svg" alt="Home" />
        <NavLink to="/home">Home</NavLink>
      </div>
      <div className="nav-tracking">
        <img src="src/assets/Nav-Icons/Invoice.svg" alt="Tracking" />
        <NavLink to="/tracking">Tracking</NavLink>
      </div>
      <div className="nav-budget">
        <img src="src/assets/Nav-Icons/Wallet.svg" alt="Budget" />
        <NavLink to="/budget">Budget</NavLink>
      </div>
      <div className="nav-rewards">
        <img src="src/assets/Nav-Icons/Trophy.svg" alt="Rewards" />
        <NavLink to="/rewards">Rewards</NavLink>
      </div>
    </nav>
  );
}