import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../services/authService";

export default function Login() {
  const { isSignedIn, openSignIn } = useAuthService();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/loading");
      return;
    }
    openSignIn();
  }, [isSignedIn, openSignIn, navigate]);

  return (
    <>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </>
  );
}
