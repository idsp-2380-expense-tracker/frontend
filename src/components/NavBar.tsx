import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => path === route;

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-home">
        <img
          src={
            isActive("/home")
              ? "src/assets/Nav-Icons/HouseSimple-Active.svg"
              : "src/assets/Nav-Icons/HouseSimple.svg"
          }
          alt="Home"
        />
        <Link to="/home">Home</Link>
      </div>

      <div className="nav-tracking">
        <img
          src={
            isActive("/tracking")
              ? "src/assets/Nav-Icons/Invoice-Active.svg"
              : "src/assets/Nav-Icons/Invoice.svg"
          }
          alt="Tracking"
        />
        <Link to="/tracking">Tracking</Link>
      </div>

      <div className="nav-budget">
        <img
          src={
            isActive("/budget")
              ? "src/assets/Nav-Icons/Wallet-Active.svg"
              : "src/assets/Nav-Icons/Wallet.svg"
          }
          alt="Budget"
        />
        <Link to="/budget">Budget</Link>
      </div>

      <div className="nav-rewards">
        <img
          src={
            isActive("/rewards")
              ? "src/assets/Nav-Icons/Trophy-Active.svg"
              : "src/assets/Nav-Icons/Trophy.svg"
          }
          alt="Rewards"
        />
        <Link to="/rewards">Rewards</Link>
      </div>
    </nav>
  );
}
