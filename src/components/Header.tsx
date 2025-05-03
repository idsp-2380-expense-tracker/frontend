import { useNavigate } from "react-router-dom";
import { SignInButton, useAuthService } from "../services/authService";
import profileIcon from "../assets/profile_icon.png";

export default function Header() {
  const { isSignedIn, user } = useAuthService();
  const displayName = isSignedIn && user ? user.firstName : "Guest";
  const navigate = useNavigate();

  return (
    <header>
      <h1>Hello, {displayName}</h1>
      {isSignedIn ? (
        <>
          <img
            src={profileIcon}
            alt="Profile icon"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />
        </>
      ) : (
        <SignInButton>
          <img
            src="src/assets/user_icon.png"
            alt="Login icon"
            style={{ cursor: "pointer" }}
          />
        </SignInButton>
      )}
    </header>
  );
}
