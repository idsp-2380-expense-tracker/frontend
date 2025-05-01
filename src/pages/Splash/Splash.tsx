import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../services/authService";

export default function Splash() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuthService();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
      return;
    }

    const timer = setTimeout(() => navigate("/login"), 2000);
    return () => clearTimeout(timer);
  }, [isSignedIn, navigate]);

  return (
    <>
      <h1>TEST_SPLASH_PAGE</h1>
    </>
  );
}