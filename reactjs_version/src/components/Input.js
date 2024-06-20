import React from "react";

export default function Input({ type, name, label, value, onChange, errors }) {
    return (
        <div className={errors ? "error" : ""}>
            <label className="label" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                aria-describedby={errors ? name + " Error" : null}
            />
            {errors && <span style={{ color: "red" }}>{errors}</span>}
        </div>
    );
}
