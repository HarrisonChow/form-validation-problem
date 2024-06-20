import React from "react";

export default function Dropdown({ options, name, label, onChange }) {
    return (
        <div>
            <label className="label" htmlFor="colour">
                {label}
            </label>
            <select onChange={onChange} name={name} id={name}>
                <option value="">Choose {name}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
