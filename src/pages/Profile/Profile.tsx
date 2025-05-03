import { useAuthService } from "../../services/authService";
import leftArrow from "../../assets/left_arrow.png";
import profilePic from "../../assets/profile_pic.svg";

export default function Profile() {
  const { isSignedIn, user } = useAuthService();
  const displayName = isSignedIn && user ? user.firstName : "Guest";

  return (
    <>
      <img src={leftArrow} alt="Back button" className="back-button" />
      <section className="profile">
        <img src={profilePic} alt="Profile picture" />
        <h1>{displayName}</h1>
      </section>
    </>
  );
}
