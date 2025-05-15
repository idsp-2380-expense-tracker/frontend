import { useNavigate } from "react-router-dom";
import { SignOutButton, useAuthService } from "../../services/authService";
// Image Source
import { useEffect, useState } from "react";
import accountCircle from "../../assets/account_circle.svg";
import arrowInCircleYellow from "../../assets/arrow_in_circle_yellow.svg";
import leftArrow from "../../assets/left_arrow.png";
import logOutIcon from "../../assets/log_out_icon.svg";
import settingsIcon from "../../assets/settings_icon.svg";
import MyAccount from "./MyAccount";

export default function Profile() {
  const { openUserProfile, isSignedIn, user } = useAuthService();
  const displayName = isSignedIn && user ? user.firstName : "Guest";
  const navigate = useNavigate();

  const [view, setView] = useState<"profile" | "myAccount">("profile");

  if (view === "myAccount") {
    return <MyAccount onBack={() => setView("profile")} />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div id="profile-layout">
      <img
        src={leftArrow}
        alt="Back button"
        className="back-button"
        onClick={() => navigate("/home")}
      />

      <div className="content-background">
        <div className="content">
          <div className="profile">
            <img
              src={user?.imageUrl}
              alt="Profile picture"
              style={{
                cursor: "pointer",
                width: 120,
                height: 120,
                borderRadius: "50%",
              }}
            />
            <h1>{displayName}</h1>
          </div>

          <div className="my-account" onClick={() => setView("myAccount")}>
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

          <div className="security-settings" onClick={() => openUserProfile()}>
            <div className="menu-item">
              <img src={settingsIcon} alt="Settings icon" id="account-circle" />
              <span className="body-bold ">Security Settings</span>
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
    </div>
  );
}
