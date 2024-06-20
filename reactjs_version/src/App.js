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
        console.log(formData, "formData");
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
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        value={formData.password}
                        onChange={handleOnChange}
                    />
                </fieldset>

                <fieldset>
                    <h3>Your animal</h3>
                    <Dropdown
                        options={colourOptions}
                        onChange={handleOnChange}
                        name="colour"
                        label="Colour"
                    />
                    <div>
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
                    </div>
                    <Input
                        type="text"
                        name="tigerType"
                        label="Type of tiger"
                        value={formData.tigerType}
                        onChange={handleOnChange}
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
