## Front-end

- **Tech**: Vite + React + TypeScript + SASS + PWA
- **Render**: Static Site
- **Authentication**: Clerk (Frontend Integration)
- **Calendar Feature**: react-datepicker
- **Drawer UI**: MUI `SwipeableDrawer`

## Back-end

- **Tech**: Node.js + Express + Sequelize (MySQL)
- **Database**: Aiven (Managed MySQL)
- **Render**: Web Service
- **Authentication Handling**: Verify Clerk tokens (server-side)
- **OCR Feature**: Google Cloud Vision API (for receipt image recognition)

## Frontend Router

- **GET**: `/home`, `/tracking`, `/budget`, `/rewards`, `/profile`, `/login`, `/splash`

## API Router (Front + Back)

- **GET**: `/api/user/data` – retrieves the full user dataset
- **POST**: `/api/budget`, `/api/tracking`, `/api/rewards`

### Frontend Build & Preview

```bash
$ rm -rf dist
$ npm run build
$ npm run preview
```
