import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/profile_icon.png";
import { SignInButton, useAuthService } from "../services/authService";

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
            src={user?.imageUrl}
            alt="Profile icon"
            onClick={() => navigate("/profile")}
            style={{
              cursor: "pointer",
              width: 45,
              height: 45,
              borderRadius: "50%"
            }}
          />
        </>
      ) : (
        <SignInButton>
          <img
            src={profileIcon}
            alt="Login icon"
            style={{ cursor: "pointer" }}
          />
        </SignInButton>
      )}
    </header>
  );
}
