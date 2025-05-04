import { useNavigate } from "react-router-dom";
import { SignOutButton, useAuthService } from "../../services/authService";
// Image Sources
import leftArrow from "../../assets/left_arrow.png";
import profilePic from "../../assets/profile_pic.svg";
import accountCircle from "../../assets/account_circle.svg";
import arrowInCircleYellow from "../../assets/arrow_in_circle_yellow.svg";
import logOutIcon from "../../assets/log_out_icon.svg";

export default function Profile() {
  const { openUserProfile, isSignedIn, user } = useAuthService();
  const displayName = isSignedIn && user ? user.firstName : "Guest";
  const navigate = useNavigate();

  return (
    <>
      <img
        src={leftArrow}
        alt="Back button"
        className="back-button"
        onClick={() => navigate("/home")}
      />

      <div className="content-background">
        <div className="content">
          <div className="profile">
            <img src={profilePic} alt="Profile picture" />
            <h1>{displayName}</h1>
          </div>

          <div className="my-account" onClick={() => openUserProfile()}>
            <div className="menu-item">
              <img src={accountCircle} alt="Account icon" id="account-circle" />
              <span className="body-bold ">My Account</span>
            </div>
            <img
              src={arrowInCircleYellow}
              alt="Right arrow in circle"
              id="arrow-in-circle"
            />
          </div>

          <SignOutButton>
            <div id="log-out">
              <img src={logOutIcon} alt="Log out icon" id="log-out-icon" />
              <span id="log-out-btn">Log Out</span>
            </div>
          </SignOutButton>
        </div>
      </div>
    </>
  );
}
