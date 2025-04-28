## Front-end

- **Tech**: Vite + React + TypeScript + SASS + PWA
- **Render**: Static Site
- **Authentication**: Clerk (Frontend Integration)
- **Calendar Feature**: react-calendar

## Back-end

- **Tech**: Node.js + Express + Sequelize (MySQL)
- **Database**: Aiven (Managed MySQL)
- **Render**: Web Service
- **Authentication Handling**: Verify Clerk tokens (server-side)
- **OCR Feature**: Google Cloud Vision API (for receipt image recognition)

## Frontend Router

- **GET**: `/home`, `/tracking`, `/budget`, `/rewards`

## API Router (Front + Back)

- **GET**: `/api/auth/user`, `/api/rewards`
- **GET + POST**: `/api/budget`, `/api/calendar`, `/api/receipts`

## Flow Structure

Frontend (Render Static Site)
↓ fetch real API or fakeDB
Backend (Render Web Service)
↓  
Aiven MySQL Database

## Front-end fetch Logic

```tsx
// fakeDB path -> public/fakeDB_***.json
const IS_HOSTED = import.meta.env.VITE_IS_HOSTED === "true";
const API_BASE = "https://backend-nqq1.onrender.com/api";

const getData = async (endpoint: string) => {
  const path = IS_HOSTED
    ? `${API_BASE}/${endpoint}`
    : `/fakeDB_${endpoint}.json`;
  const response = await fetch(path);
  const data = await response.json();
  return data;
};

export { getData };
```

## Back-end router

```ts
// routes/budgetRouter.ts
const express = require("express");
const router = express.Router();
const { getAllBudgets } = require("../services/budgetService");

router.get("/", async (req, res) => {
  try {
    const budgets = await getAllBudgets();
    res.status(200).json(budgets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch budget data" });
  }
});

module.exports = router;
```

## src/ Folder Structure

src/
├── pages/
│ ├── Home/
│ │ ├── Home.tsx
│ │ └── Home.scss
│ ├── Tracking/
│ │ ├── Tracking.tsx
│ │ └── Tracking.scss
│ ├── Budget/
│ │ ├── Budget.tsx
│ │ └── Budget.scss
│ └── Rewards/
│ . ├── Rewards.tsx
│ . └── Rewards.scss
├── routes/
│ └── AppRouter.tsx
├── services/
│ ├── authService.ts
│ ├── budgetService.ts
│ ├── rewardsService.ts
│ ├── calendarService.ts
│ └── receiptsService.ts
├── styles/
│ ├── \_variables.scss
│ ├── \_mixins.scss
│ └── main.scss
├── App.tsx
└── main.tsx
