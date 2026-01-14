# Dynamic User Search (React + TypeScript)

A simple React component that fetches users from an external API and provides a real-time search feature to filter users by name or email without UI flickering.

---

## 📌 Features

- Fetches a list of users from an external API
- Real-time search by **name** or **email**
- No UI flickering (data fetched once)
- Clean and maintainable code
- Loading and error handling
- Styled using Tailwind CSS
- Built with React Functional Components and Hooks
- Fully written in TypeScript

---

## 🛠 Technologies Used

- React
- TypeScript
- Tailwind CSS
- Fetch API

---

## 📂 Component Overview

### `DynamicUserSearch.tsx`

- Fetches users once when the component mounts using `useEffect`
- Stores:
  - Original users list (source of truth)
  - Filtered users list (for UI rendering)
- Filters users locally as the user types in the search input
- Prevents unnecessary re-fetching and UI flickering

---

## 🚀 How to Run Locally

### 1️⃣ Create a React + TypeScript project (Vite)
```bash
npm create vite@latest dynamic-user-search -- --template react-ts
cd dynamic-user-search
