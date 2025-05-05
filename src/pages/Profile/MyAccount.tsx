import { FormEvent } from "react";
import { OnBackProps } from "../../interfaces/uiProps";
import { useAuthService } from "../../services/authService";
import { profileService } from "../../services/profileService";
// Image Sources
import leftArrow from "../../assets/left_arrow.png";

export default function MyAccount({ onBack }: OnBackProps) {
  const { user } = useAuthService();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;
    const data: FormData = new FormData(form);
    await profileService.updateUserProfile({
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      email: data.get("email") as string,
    });
    onBack();
  };

  return (
    <div id="my-account-layout">
      <div id="my-account-header">
        <img
          src={leftArrow}
          alt="Back button"
          className="back-button"
          onClick={onBack}
        />
        <h1>My Account</h1>
      </div>

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
                borderRadius: "50%"
              }}
            />
            <a href="#">Change profile picture</a>
          </div>

          <div id="edit-profile">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <label htmlFor="lastName">Last Name</label>

              <input type="text" id="firstName" name="firstName" placeholder={user?.firstName ?? "John"} required />
              <input type="text" id="lastName" name="lastName" placeholder={user?.lastName ?? "Doe"} required />
              

              <label id="email-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={user?.primaryEmailAddress?.emailAddress ?? "john.doe@email.com"}
                required
              />

              <button id="register-btn" type="submit">
                Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
