import { useAuthService } from "../../services/authService";

export default function Profile() {
  const { isSignedIn, user } = useAuthService();
  const displayName = isSignedIn && user ? user.firstName : "Guest";

  return (
    <>
      <img
        src="src/assets/left_arrow.png"
        alt="Back button"
        className="back-button"
      />
      <section className="profile">
        <img src="src/assets/profile_pic.svg" alt="Profile picture" />
        <h1>{displayName}</h1>
      </section>
    </>
  );
}
