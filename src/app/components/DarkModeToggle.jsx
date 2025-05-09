'use client';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [lightMode, setLightMode] = useState(false);

    // Function to handle the toggling of dark mode
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    // Apply the dark mode class to the root element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            onClick={toggleDarkMode}
            className="lg:p-3 p-2 rounded-full bg-gray-200 max-sm:text-sm cursor-pointer dark:bg-gray-700 hover:bg-gray-500 text-black dark:text-white transition duration-200"
        >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
