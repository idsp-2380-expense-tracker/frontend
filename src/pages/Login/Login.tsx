import SignIn from "../../services/authService";

export default function Login() {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "10vh" }}>
      <SignIn
        path="/login"
        routing="path"
        afterSignInUrl="/loading"
        appearance={{
          variables: {
            // "#cef24a"
            colorPrimary: "#7624f3",
            colorBackground: "#181626",
            colorText: "#ffffff"
          },
          elements: {
            input: {
              backgroundColor: "#333053",
              color: "#ffffff"
            },
            socialButtonsBlockButton: {
              backgroundColor: "#333053",
              color: "#ffffff"
            }
          }
        }}
      />
    </div>
  );
}