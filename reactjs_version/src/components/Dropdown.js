import React from "react";

export default function Dropdown({ options, name, label, onChange, errors }) {
    return (
        <div className={errors ? "error" : ""}>
            <label className="label" htmlFor="colour">
                {label}
            </label>
            <select
                onChange={onChange}
                name={name}
                id={name}
                aria-describedby={errors ? name + " Error" : null}
            >
                <option value="">Choose {name}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && <span style={{ color: "red" }}>{errors}</span>}
        </div>
    );
}
