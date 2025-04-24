# Pup Spots 🐾

A curated map of dog-friendly hangouts across Los Angeles, built with **Next.js**, **Mapbox GL**, and **ShadCN**.

**[Live Demo](https://pup-spots.vercel.app/)**

---

## ☀️ Features (Completed within 4 hours)

- Interactive Mapbox map centered on LA
- Click on the map to add custom pins
- Modal form for entering pin details
- `localStorage` persistence on page reload
- Preloaded demo pins for easy preview
- Marker hover reveals popups with title + description
- UI using Tailwind & ShadCN components

---

## 🎯 Stretch Goals (Not included in 4-hour submission)

- Custom marker icons by category (e.g. cafes, hikes, shops)
- Category filtering
- Visual badges ("Unvisited", "Loved", "Not Keen")
- Visual badges filtering
- Multi-select inputs for categories and badges
- Form validation with Zod + toast notifications
- Location search
- Highlight buildings and populate with address on click
- Edit and Delete Pins
- Auth and persistent backend (e.g. Supabase, Postgres, Clerk)
- Onboarding experience for first-time users

---

## ⚙️ Tech Stack

- **Framework:** Next.js
- **UI:** ShadCN + Tailwind CSS
- **Maps:** Mapbox GL JS
- **Icons:** Phosphor React
- **State:** React Hooks + `localStorage`
- **Deployment:** Vercel

---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/pup-spots.git
cd pup-spots

# Install dependencies
npm install

# Create a .env.local file with your Mapbox token
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token

# Run the development server
npm run dev
```

Visit http://localhost:3000 to view the app.
