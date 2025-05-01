import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataService } from "../../services/userDataService";

export default function Loading() {
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const navigate = useNavigate();

  useEffect(() => {
    userDataService.clearCache();

    userDataService
      .fetchUserData()
      .then(() => navigate("/home"))
      .catch((err) => {
        console.error("Failed to load user data:", err);
        setStatus("error");
      });
  }, [navigate]);

  if (status === "error") {
    return <div>Failed to load user data. Please try again.</div>;
  }

  return (
    <>
      <h1>Loading user data...</h1>
    </>
  );
}
