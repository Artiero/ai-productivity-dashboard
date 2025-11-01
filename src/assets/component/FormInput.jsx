import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function FormInput({ onAddTask }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(input);
        setInput('');
    };

    FormInput.propTypes = {
        onAddTask: PropTypes.func.isRequired,
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white mt-7 rounded-md border border-gray-200 p-4">
            <div className="flex gap-3">
                <input
                    id="taskInput"
                    type="text"
                    placeholder="Masukkan task baru..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-gray-100 rounded-md px-3 py-2 outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    <FontAwesomeIcon icon={faPlus} className='text-base' />
                </button>
            </div>
        </form>
    );
}
