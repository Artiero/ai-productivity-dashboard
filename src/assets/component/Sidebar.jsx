import React from 'react'

export default function Sidebar() {
    return (
        <div className="w-64 bg-slate-50 p-6 border border-gray-200">
            <div>
                <h1 className="font-heading text-xl">ProduktivAI</h1>
                <h2 className='font-body font-light'>Workspace</h2>
            </div>
            <div className='pt-2.5'>
                <ul className="font-heading grid gap-4 ">
                    <li className="hover:bg-white rounded-md cursor-pointer text-gray-400 flex items-center justify-start h-12 transition p-2.5 transform hover:translate-x-2"> Dashboard</li>
                    <li className="hover:bg-white rounded-md cursor-pointer text-gray-400 flex items-center justify-start h-12 transition p-2.5 transform hover:translate-x-2">Tasks</li>
                    <li className="hover:bg-white rounded-md cursor-pointer text-gray-400 flex items-center justify-start h-12 transition p-2.5 transform hover:translate-x-2">Notes</li>
                    <li className="hover:bg-white rounded-md cursor-pointer text-gray-400 flex items-center justify-start h-12 transition p-2.5 transform hover:translate-x-2">Insight</li>
                    <li className="hover:bg-white rounded-md cursor-pointer text-gray-400 flex items-center justify-start h-12 transition p-2.5 transform hover:translate-x-2">Settings</li>
                </ul>
            </div>
            <div>
                <p className='font-body text-light text-xs text-justify mt-10 text-gray-500'>
                    ✨ Tingkatkan produktivitas Anda dengan AI <br /> Tips & insights tersedia di halaman Insights
                </p>
            </div>
        </div>
    )
}
