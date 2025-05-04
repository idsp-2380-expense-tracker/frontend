import { useNavigate } from "react-router-dom";
// Image Sources
import leftArrow from "../../assets/left_arrow.png";
import profilePic from "../../assets/profile_pic.svg";

export default function MyAccount() {
  const navigate = useNavigate();

  return (
    <div id="my-account-layout">
      <div id="my-account-header">
        <img
          src={leftArrow}
          alt="Back button"
          className="back-button"
          onClick={() => navigate("/profile")}
        />
        <h1>My Account</h1>
      </div>

      <div className="content-background">
        <div className="content">
          <div className="profile">
            <img src={profilePic} alt="Profile picture" />
            <a href="#">Change profile picture</a>
          </div>

          <div id="edit-profile">
            <form action="" method="POST">
              <label htmlFor="firstName">First Name</label>
              <label htmlFor="lastName">Last Name</label>

              <input type="text" id="firstName" placeholder="John" required />
              <input type="text" id="lastName" placeholder="Doe" required />

              <label id="email-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@email.com"
                required
              />

              <button id="register-btn" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
