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
  console.log(userDB);
  return (
    <header>
      <h1>Hello, {userDB?.["0"]?.firstName}</h1>{" "}
      <img
        src="src/assets/user_icon.png"
        alt="User icon"
        className="userIcon"
      />
    </header>
  );
}
