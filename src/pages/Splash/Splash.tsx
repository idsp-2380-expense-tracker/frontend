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

    const timer = setTimeout(() => navigate("/login"), 3000); //2000
    return () => clearTimeout(timer);
  }, [isSignedIn, navigate]);

  return (
    <>
      <div className="splash-logo">
        <img
          src="src/assets/montro_logo.png"
          alt="Montro logo"
          className="bounce-in-top"
        />
        <h1 className="bounce-in-fwd">Budgeting, made interesting.</h1>
      </div>
    </>
  );
}
