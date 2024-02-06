import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleSelect}
      className="border-[#F5F5F5 rounded-md border text-sm "
    >
      <option value="" disabled hidden>
        Select Tag
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
