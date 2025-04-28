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

## API Fetch Logic (front-end)

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

getData("budget");
```

## API Fetch Logic (back-end)

```ts
const fetch = require("node-fetch");
require("dotenv").config();

const IS_HOSTED = process.env.IS_HOSTED === "true";
const API_BASE = IS_HOSTED
  ? "https://backend-nqq1.onrender.com/api"
  : "http://localhost:3000/api";

const getBudgetData = async (endpoint: string) => {
  const path = `${API_BASE}/${endpoint}`;
  const response = await fetch(path);
  const data = await response.json();
  return data;
};

module.exports = { getBudgetData };
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
