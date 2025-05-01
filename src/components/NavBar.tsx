import { NavLink } from "react-router-dom";
import homeIconActive from "../assets/Nav-Icons/HouseSimple-Active.svg";
import homeIcon from "../assets/Nav-Icons/HouseSimple.svg";
import trackingIconActive from "../assets/Nav-Icons/Invoice-Active.svg";
import trackingIcon from "../assets/Nav-Icons/Invoice.svg";
import rewardsIconActive from "../assets/Nav-Icons/Trophy-Active.svg";
import rewardsIcon from "../assets/Nav-Icons/Trophy.svg";
import budgetIconActive from "../assets/Nav-Icons/Wallet-Active.svg";
import budgetIcon from "../assets/Nav-Icons/Wallet.svg";

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink to="/home" end className="nav-home">
        {({ isActive }) => (
          <>
            <img src={isActive ? homeIconActive : homeIcon} alt="Home" />
            <span>Home</span>
          </>
        )}
      </NavLink>

      <NavLink to="/tracking" className="nav-tracking">
        {({ isActive }) => (
          <>
            <img src={isActive ? trackingIconActive : trackingIcon} alt="Tracking" />
            <span>Tracking</span>
          </>
        )}
      </NavLink>

      <NavLink to="/budget" className="nav-budget">
        {({ isActive }) => (
          <>
            <img src={isActive ? budgetIconActive : budgetIcon} alt="Budget" />
            <span>Budget</span>
          </>
        )}
      </NavLink>

      <NavLink to="/rewards" className="nav-rewards">
        {({ isActive }) => (
          <>
            <img src={isActive ? rewardsIconActive : rewardsIcon} alt="Rewards" />
            <span>Rewards</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
