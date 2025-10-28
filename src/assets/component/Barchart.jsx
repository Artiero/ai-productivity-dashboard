import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const data = [
    { name: "Sen", task: 20 },
    { name: "Sel", task: 15 },
    { name: "Rab", task: 10 },
    { name: "Kam", task: 17 },
    { name: "Jum", task: 16 },
    { name: "Sab", task: 8 },
    { name: "Min", task: 5 },
];

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-gray-600 text-white px-3 py-2 rounded-md shadow-md">
        <p className="font-semibold">{`${label} : ${payload?.[0]?.value}`}</p>
        </div>
    );
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    label: PropTypes.string,
};

export default function Barchart() {
    return (
        <div className="bg-white p-5 my-8 rounded-md border border-gray-200 font-body">
        <h1 className="font-semibold text-xl mb-4">Tugas Mingguan</h1>
        <div className="grid place-items-start">
            <div className="w-full max-w-md h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={data}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                >
                <defs>
                    <linearGradient id="colorTask" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{ fill: "rgba(79, 70, 229, 0.1)" }} content={ <CustomTooltip /> }/>
                <Bar 
                    dataKey="task" 
                    fill="url(#colorTask)"
                    radius={[4, 4, 0, 0]} 
                />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
}

