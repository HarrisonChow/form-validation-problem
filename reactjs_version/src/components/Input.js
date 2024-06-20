import React from "react";

export default function Input({ type, name, label, value, onChange }) {
    return (
        <div>
            <label className="label" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
