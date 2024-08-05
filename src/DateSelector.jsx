import React from 'react';

const DateSelector = ({ date, setDate, darkMode }) => (
  <div>
    <label 
      className={`block text-sm font-medium mb-2 ${
        darkMode ? 'text-gray-200' : 'text-gray-700'
      }`}
    >
      Date
    </label>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className={`w-full p-2 border rounded transition-colors duration-200 ${
        darkMode 
          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
      }`}
    />
  </div>
);

export default DateSelector;