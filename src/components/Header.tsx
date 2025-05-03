import { useNavigate } from "react-router-dom";
import {
  SignInButton,
  SignOutButton,
  useAuthService,
} from "../services/authService";

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
            src="src/assets/user_icon.png"
            alt="User icon"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />
          <SignOutButton>(FOR TEST)sign_out</SignOutButton>
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
