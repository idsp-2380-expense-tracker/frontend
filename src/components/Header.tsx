import { SignInButton, useClerk, useUser } from "@clerk/clerk-react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface HeaderProps {
  userDB: {
    [key: string]: User;
  } | null;
}

export default function Header({ userDB }: HeaderProps) {
  const { openUserProfile } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <header>
      <h1>Hello, {userDB?.["0"]?.firstName ?? "Guest"}</h1>

      {isSignedIn ? (
        <img
          src="src/assets/user_icon.png"
          alt="User icon"
          className="userIcon"
          onClick={() => openUserProfile()}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <SignInButton>
          <img
            src="src/assets/user_icon.png"
            alt="Login icon"
            className="userIcon"
            style={{ cursor: "pointer", opacity: 0.6 }}
            title="Click to sign in"
          />
        </SignInButton>
      )}
    </header>
  );
}
