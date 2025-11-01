import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function TaskActive({ task, onToggle, onDelete }) {
    
    TaskActive.propTypes = {
        task: PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired,
        onToggle: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    };


    return (
        <div className={`mt-3 rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300
            ${task.done ? "bg-slate-50" : "bg-white" }`} >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id={`task-${task.id}`}
                        checked={task.done}
                        onChange={() => onToggle(task.id)}
                        className="w-5 h-5 accent-blue-500 mt-1 cursor-pointer"
                    />
                    <div className="flex flex-col">
                        <label
                            htmlFor={`task-${task.id}`}
                            className={`font-heading text-base cursor-pointer ${
                                task.done ? 'line-through text-gray-400' : 'text-gray-800'
                            }`}
                        >
                            {task.text}
                        </label>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            <span>{task.date}</span>
                        </div>
                    </div>
                </div>
                <button onClick={() => onDelete(task.id)}>
                    <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-700" />
                </button>
            </div>
        </div>
    );
}
