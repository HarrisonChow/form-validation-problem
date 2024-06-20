import React, { useState } from "react";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import Checkbox from "./components/Checkbox";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        colour: "",
        animals: {
            bear: false,
            tiger: false,
            snake: false,
            donkey: false,
        },
        tigerType: "",
    });
    const colourOptions = [
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
        { label: "Red", value: "red" },
        { label: "Black", value: "black" },
        { label: "Brown", value: "brown" },
    ];

    const animalList = [
        {
            name: "bear",
            label: "Bear",
            id: "1",
        },
        {
            name: "tiger",
            label: "Tiger",
            id: "2",
        },
        {
            name: "snake",
            label: "Snake",
            id: "3",
        },
        {
            name: "donkey",
            label: "Donkey",
            id: "4",
        },
    ];

    const [errors, setErrors] = useState({});

    const handleOnChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                animals: {
                    ...formData.animals,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("ddddd", formData);
        if (validate()) {
        } else {
            console.log(errors, "errors");
        }
    };

    const validate = () => {
        const errors = {};
        // Password validation
        if (!formData.password) {
            errors.password = "password is required";
        } else if (formData.password && formData.password.length <= 8) {
            errors.password = "Password must be longer than 8 characters";
        }

        //Email validation
        if (!formData.email) errors.email = "Email is required";

        //Colour validation
        if (!formData.colour) errors.colour = "Colour is required";

        // Animals validation
        const selectedAnimals = Object.values(formData.animals).filter(Boolean);
        if (selectedAnimals.length < 2) {
            errors.animals = "At least two animals must be chosen";
        }

        //Type of tiger  validation
        if (formData.animals.tiger && !formData.tigerType) {
            errors.tigerType = "Type of tiger is required if Tiger is chosen";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>Fill out this awesome form</h1>
                <fieldset>
                    <h3>Your details</h3>
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleOnChange}
                        errors={errors.email}
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        value={formData.password}
                        onChange={handleOnChange}
                        errors={errors.password}
                    />
                </fieldset>

                <fieldset>
                    <h3>Your animal</h3>
                    <Dropdown
                        options={colourOptions}
                        onChange={handleOnChange}
                        name="colour"
                        label="Colour"
                        errors={errors.colour}
                    />
                    <div className={errors.animals ? "error" : ""}>
                        <span className="label">Animal</span>

                        {animalList.map((animal, index) => (
                            <Checkbox
                                key={index}
                                label={animal.label}
                                value={formData.animals}
                                name={animal.name}
                                id={animal.id}
                                onChange={handleOnChange}
                            />
                        ))}

                        {errors.animals && (
                            <span style={{ color: "red" }}>
                                {errors.animals}
                            </span>
                        )}
                    </div>
                    <Input
                        type="text"
                        name="tigerType"
                        label="Type of tiger"
                        value={formData.tigerType}
                        onChange={handleOnChange}
                        errors={errors.tigerType}
                    />
                </fieldset>
                <fieldset>
                    <div>
                        <input type="submit" value="Create account" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
