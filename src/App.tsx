import { useEffect, useState } from "react";
import Home from "../src/pages/Home/Home";
import "../src/styles/App.scss";
import { useAuthService } from "./services/authService";
import { userDataService } from "./services/userDataService";

export default function App() {
  const { isSignedIn, openSignIn } = useAuthService();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    userDataService.clearCache();
    userDataService
      .fetchUserData()
      .then(() => setDataLoaded(true))
      .catch(console.error);
  }, [isSignedIn, openSignIn]);

  if (!isSignedIn) {
    return null;
  }

  if (!dataLoaded) {
    return <div>Loading data…</div>;
  }

  return <Home />;
}