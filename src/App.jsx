import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./assets/component/Sidebar"
import Cardtaks from "./assets/component/Cardtaks"
import Barchart from "./assets/component/Barchart"
import Linechart from "./assets/component/Linechart"
import Activity from "./assets/component/Activity"
import Tasks from "./pages/Task"
import Notes from "./pages/Notes"
import Insight from "./pages/Insights"
import Settings from "./pages/Settings"

function Dashboard() {
  return (
    <div className="p-7 mt-4 w-full">
      <h1 className="font-heading text-2xl">Dashboard Overview</h1>
      <p className="font-body text-base font-light pt-1 text-gray-500">
        Selamat datang kembali! Berikut ringkasan produktivitas Anda hari ini.
      </p>
      <Cardtaks />
      <div className="grid grid-cols-2 gap-7 mt-5">
        <Barchart />
        <Linechart />
      </div>
      <Activity />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
