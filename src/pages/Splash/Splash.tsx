import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../services/authService";
// Image Sources
import logo from "../../assets/montro_logo.png";

export default function Splash() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuthService();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
      return;
    }

    const timer = setTimeout(() => navigate("/login"), 3000);
    return () => clearTimeout(timer);
  }, [isSignedIn, navigate]);

  return (
    <>
      <div className="splash-logo bounce-in-fwd">
        <img src={logo} alt="Montro logo" />
        <h1>Budgeting, made interesting.</h1>
      </div>
    </>
  );
}
