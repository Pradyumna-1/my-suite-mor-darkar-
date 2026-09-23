import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";

import Notes from "./pages/notes/Notes";
import NoteEditor from "./pages/notes/NoteEditor";

import Expenses from "./pages/expenses/Expenses";
import Transactions from "./pages/expenses/Transactions";
import Budget from "./pages/expenses/Budget";

import Calendar from "./pages/reminders/Calendar";
import Reminders from "./pages/reminders/Remindeers";

import Sharing from "./pages/sharing/Sharing";
import Analytics from "./pages/analytics/Analytics";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";

import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* MySuite Home */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />

          {/* Notes */}
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/new" element={<NoteEditor />} />
          <Route path="/notes/:id" element={<NoteEditor />} />

          {/* Expense Tracker */}
          <Route path="/expenses" element={<Expenses />} />
          <Route
            path="/transactions"
            element={<Transactions />}
          />
          <Route
            path="/income"
            element={<Transactions incomeOnly />}
          />
          <Route path="/budget" element={<Budget />} />

          {/* Expense utilities */}
          <Route
            path="/calendar"
            element={<Calendar />}
          />

          <Route
            path="/reminders"
            element={<Reminders />}
          />

          {/* Other */}
          <Route
            path="/sharing"
            element={<Sharing />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}