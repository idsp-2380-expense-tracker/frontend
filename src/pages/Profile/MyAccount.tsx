import { FormEvent } from "react";
import { OnBackProps } from "../../interfaces/uiProps";
import { useAuthService } from "../../services/authService";
// Image Sources
import leftArrow from "../../assets/left_arrow.png";
import { profileService } from "../../services/profileService";
import UserProfileUploader from "./UserProfileUploader";

export default function MyAccount({ onBack }: OnBackProps) {
  const { user } = useAuthService();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: HTMLFormElement = e.currentTarget;
    const data: FormData = new FormData(form);
    try {
      await profileService.updateUserProfile(
        user,
        data.get("firstName") as string || "",
        data.get("lastName") as string || ""
      );
    } catch (error) {
      console.error(`Profile Update Failed: ${error}`);
    } finally {
      onBack();
    }
  };

  const handleImageSelect = async (file: File) => {
    if (!user) return
    try {
      await user.setProfileImage({ file })
    } catch (err) {
      console.error(`Image upload failed: ${err}`);
    }
  }

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
                borderRadius: "50%",
              }}
            />
            <UserProfileUploader onFileSelect={handleImageSelect} />
          </div>

          <div id="edit-profile">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={user?.firstName ?? ""}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={user?.lastName ?? ""}
              />

              <label id="email-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user?.primaryEmailAddress?.emailAddress ?? ""}
                readOnly
              />

              <button id="register-btn" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
