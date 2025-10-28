import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Tasks", path: "/tasks" },
        { name: "Notes", path: "/notes" },
        { name: "Insight", path: "/insight" },
        { name: "Settings", path: "/settings" },
    ];

    return (
        <div className="w-64 bg-slate-50 p-6 border border-gray-200">
            <div className="flex mt-5 items-center gap-3">
            <FontAwesomeIcon icon={faBuilding} size="2x" className="text-blue-900" />
            <div>
                <h1 className="font-heading text-xl">ProduktivAI</h1>
                <h2 className="font-body font-light">Workspace</h2>
                </div>
            </div>
        <ul className="font-heading grid gap-2 pt-4">
            {menuItems.map((item) => (
            <li key={item.name}>
                <NavLink
                to={item.path}
                className={({ isActive }) =>
                    `rounded-md cursor-pointer flex items-center justify-start h-12 transition p-2.5 transform hover:translate-x-2 ${
                    isActive ? "bg-white  border-gray-400 shadow-lg text-blue-500 font-semibold" : "text-gray-400 hover:bg-white"
                    }`
                }
                >
                {item.name}
                </NavLink>
            </li>
            ))}
        </ul>
        <div>
            <p className="font-body text-light text-xs text-justify mt-10 text-gray-500">
            ✨ Tingkatkan produktivitas Anda dengan AI <br /> Tips & insights tersedia di halaman Insights
            </p>
        </div>
        </div>
    );
}
