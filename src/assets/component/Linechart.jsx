import React from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
} from "recharts";

const data = [
{ name: "00 : 00", Fokus: 100 },
{ name: "06 : 00", Fokus: 20 },
{ name: "12 : 00", Fokus: 70 },
{ name: "18 : 00", Fokus: 80 },
{ name: "24 : 00", Fokus: 45 },
];

export default function Linechart() {
return (
    <div className="bg-white p-5 my-8 rounded-md border border-gray-200 font-body">
        <h1 className="font-semibold text-xl mb-4">Tingkat Fokus Hari Ini</h1>
        <div className="grid place-items-start">
            <div className="w-full max-w-md h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip
                        contentStyle={{
                        borderRadius: 8,
                        backgroundColor: "#F8FAFC",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Fokus"
                        stroke="#6366F1"
                        strokeWidth={3}
                        dot={{ r: 5, strokeWidth: 2 }}
                        activeDot={{ r: 8, fill: "#6366F1", stroke: "#fff" }}
                    />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
);
}
