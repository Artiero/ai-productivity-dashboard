import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./assets/component/Sidebar";
import Cardtaks from "./assets/component/Cardtaks";
import Barchart from "./assets/component/Barchart";
import Linechart from "./assets/component/Linechart";
import Activity from "./assets/component/Activity";
import Tasks from "./pages/Task";
import Notes from "./pages/Notes";
import Insight from "./pages/Insights";
import Settings from "./pages/Settings";

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="container margin-auto p-7 mt-4"
    >
      <h1 className="font-heading text-2xl">Dashboard Overview</h1>
      <p className="font-body text-base font-light pt-1 text-gray-500">
        Selamat datang kembali! Berikut ringkasan produktivitas Anda hari ini.
      </p>
      <Cardtaks />
      <div className="grid grid-cols-2 gap-7">
        <Barchart />
        <Linechart />
      </div>
      <Activity />
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-50 overflow-hidden">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}
