import SignIn from "../../services/authService";

export default function Login() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "10vh" }}
    >
      <SignIn
        path="/login"
        routing="path"
        afterSignInUrl="/loading"
        appearance={{
          variables: {
            colorPrimary: "#cef24a",
            colorBackground: "#38355b",
            colorText: "#ffffff",
          },
          elements: {
            input: {
              backgroundColor: "#282641",
              color: "#ffffff",
            },
            button: {
              color: "black",
            },
            socialButtonsBlockButton: {
              backgroundColor: "#282641",
              color: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}
