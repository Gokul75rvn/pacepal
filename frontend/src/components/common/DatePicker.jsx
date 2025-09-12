import React from 'react';

const DatePicker = ({ value, onChange }) => {
	return (
		<input
			type="date"
			className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
			value={value}
			onChange={onChange}
		/>
	);
};

export default DatePicker;
