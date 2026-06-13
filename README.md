# Akshaya Tambe – Portfolio (MERN)

A dynamic, animated personal portfolio built with React (Vite) + TailwindCSS on the frontend, and Node.js + Express + MongoDB on the backend.

## Folder Structure
```
portfolio/
├── client/   → React frontend (Vite + Tailwind)
└── server/   → Express + MongoDB backend
```

## 1. Local Setup in VS Code

### Backend
```bash
cd server
npm install
cp .env.example .env
# edit .env and add your MongoDB Atlas connection string
npm run dev
```
Server runs at http://localhost:5000

To seed your two projects into MongoDB:
```bash
node seed.js
```

### Frontend
```bash
cd client
npm install
cp .env.example .env
npm run dev
```
Frontend runs at http://localhost:5173

> Note: Even without the backend running, the Projects section will show fallback data so the site still looks complete.

## 2. Add Your Resume & Photo
- Place your resume PDF at `client/public/resume.pdf` (Hero section download button points here)
- Add a profile photo wherever you'd like and reference it in `Hero.jsx` if desired

## 3. MongoDB Atlas Setup
1. Create a free cluster at https://www.mongodb.com/atlas
2. Create a database user and allow access from anywhere (0.0.0.0/0) for simplicity
3. Copy the connection string into `server/.env` as `MONGO_URI`

## 4. Deployment

### Frontend → Vercel
1. Push the whole `portfolio` repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Set **Root Directory** to `client`
4. Framework Preset: Vite
5. Add Environment Variable: `VITE_API_URL` = your deployed backend URL + `/api` (e.g. `https://your-backend.onrender.com/api`)
6. Deploy

### Backend → Render
1. Go to render.com → New → Web Service → connect your repo
2. Set **Root Directory** to `server`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add Environment Variables: `MONGO_URI`, `PORT`
6. Deploy and copy the live URL
7. Update `VITE_API_URL` in Vercel with this URL and redeploy frontend

## 5. Customize
- Colors: `client/tailwind.config.js`
- Content: edit text directly inside each component in `client/src/components/`
- Projects: edit `server/seed.js` and re-run `node seed.js`, or use the `/api/projects` POST endpoint
