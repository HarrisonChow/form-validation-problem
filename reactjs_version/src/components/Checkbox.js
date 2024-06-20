import React from "react";

export default function Checkbox({ label, value, name, id, onChange }) {
    return (
        <>
            <input
                type="checkbox"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>
        </>
    );
}
