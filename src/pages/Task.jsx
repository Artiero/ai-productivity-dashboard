import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormInput from '../assets/component/FormInput';
import TaskActive from '../assets/component/TaskActive';

export default function Task() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        if (!text.trim()) return;
        const newTask = {
            id: Date.now(),
            text,
            date: new Date().toISOString().slice(0, 10),
            done: false,
        };
        setTasks([newTask, ...tasks]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const activeTasks = tasks.filter(task => !task.done);
    const completedTasks = tasks.filter(task => task.done);

    return (
        // 🌈 Animasi masuk page Task
        <motion.div
            className="container mx-auto p-7 mt-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className='flex justify-between'>
                <div>
                    <h1 className="font-heading text-2xl">Task Management</h1>
                    <p className="font-body text-base font-light pt-1 text-gray-500">
                        Kelola tugas harian Anda dengan efisien
                    </p>
                </div>
                <div>
                    <h1 className="font-heading text-base text-gray-500">Hari ini</h1>
                    <p className="font-heading text-base pt-1">
                        {activeTasks.length} Tugas aktif
                    </p>
                </div>
            </div>

            {/* 📝 Form tambah task */}
            <FormInput onAddTask={addTask} />

            {/* 🚀 Task aktif */}
 <div>
                <h1 className='font-body text-base mt-5 mb-2'>Tugas Aktif</h1>
                <AnimatePresence>
                    {activeTasks.length === 0 ? (
                        <motion.p
                            key="no-active"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-gray-400 text-sm italic"
                        >
                            Belum ada tugas aktif.
                        </motion.p>
                    ) : (
                        activeTasks.map(task => (
                            <motion.div
                                key={task.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TaskActive
                                    task={task}
                                    onToggle={toggleTask}
                                    onDelete={deleteTask}
                                />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>

            {/* 🌿 Task selesai */}
            <div>
                <h1 className='font-body text-base mt-5 mb-2'>Tugas Selesai</h1>
                <AnimatePresence>
                    {completedTasks.length === 0 ? (
                        <motion.p
                            key="no-completed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-gray-400 text-sm italic"
                        >
                            Belum ada tugas yang selesai.
                        </motion.p>
                    ) : (
                        completedTasks.map(task => (
                            <motion.div
                                key={task.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TaskActive
                                    task={task}
                                    onToggle={toggleTask}
                                    onDelete={deleteTask}
                                />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
