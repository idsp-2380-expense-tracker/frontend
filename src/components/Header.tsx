import { SignInButton, SignOutButton, useAuthService } from "../services/authService";

export default function Header() {
  const { openUserProfile, isSignedIn, user } = useAuthService();
  const displayName = isSignedIn && user ? user.firstName : "Guest";

  return (
    <header>
      <h1>Hello, {displayName}</h1>
      {isSignedIn ? (
        <>
          <img
            src="src/assets/user_icon.png"
            alt="User icon"
            onClick={() => openUserProfile()}
            style={{ cursor: "pointer" }}
          />
          <SignOutButton>
            (FOR TEST)sign_out
          </SignOutButton>
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
