import { useEffect, useState } from "react";
import Header from "../../components/Header";

export default function Home() {
  const [userDB, setUserDB] = useState(null);

  useEffect(() => {
    fetch("/fakeDB_Model/fakeDB_user.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserDB(data);
      })
      .catch((error) => {
        console.error("Error fetching the user database:", error);
      });
  }, []);

  return <Header userDB={userDB} />;
}
