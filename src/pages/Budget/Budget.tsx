import { useEffect } from "react";

function Budget() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://backend-nqq1.onrender.com/api/budget/data");
        const data = await response.json();
        console.log("Budget.tsx:", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Budget Page</div>;
}

export default Budget;