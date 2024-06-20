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
            name: "animals",
            label: "Bear",
            id: "1",
        },
        {
            name: "animals",
            label: "Tiger",
            id: "2",
        },
        {
            name: "animals",
            label: "Snake",
            id: "3",
        },
        {
            name: "animals",
            label: "Donkey",
            id: "4",
        },
    ];
    const handleOnChange = (name, value) => {};
    return (
        <div className="App">
            <form method="post" action="">
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
                        value={formData.password}
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
