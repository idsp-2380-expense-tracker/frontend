import { useEffect, useState } from "react";
import { useAuthService } from "../../services/authService";
import { budgetService } from "../../services/budgetService";

export default function Budget() {
  const [data, setData] = useState<any>(null);
  const { isSignedIn, user } = useAuthService();

  useEffect(() => {
    if (isSignedIn && user) {
      budgetService
        // "0" will be replace with user.id
        .getBudgetDataByUser("0")
        .then(setData)
        .catch(console.error)
    }
  }, [isSignedIn, user])

  console.log("Budget data:", data);

  return <div>Budget For Test Log</div>;
}