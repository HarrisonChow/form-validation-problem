import React, { useState } from "react";
import Input from "./components/Input";
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
                    <p>
                        <label className="label" htmlFor="colour">
                            Colour
                        </label>
                        <select name="colour" id="colour">
                            <option value="">Choose colour</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            <option value="black">Black</option>
                            <option value="brown">Brown</option>
                        </select>
                    </p>
                    <p>
                        <span className="label">Animal</span>

                        <input
                            type="checkbox"
                            name="animal"
                            value="bear"
                            id="bear"
                        />
                        <label htmlFor="bear">Bear</label>

                        <input
                            type="checkbox"
                            name="animal"
                            value="tiger"
                            id="tiger"
                        />
                        <label htmlFor="tiger">Tiger</label>

                        <input
                            type="checkbox"
                            name="animal"
                            value="snake"
                            id="snake"
                        />
                        <label htmlFor="snake">Snake</label>

                        <input
                            type="checkbox"
                            name="animal"
                            value="donkey"
                            id="donkey"
                        />
                        <label htmlFor="donkey">Donkey</label>
                    </p>
                    <Input
                        type="text"
                        name="tigerType"
                        label="Type of tiger"
                        value={formData.password}
                        onChange={handleOnChange}
                    />
                </fieldset>
                <fieldset>
                    <p>
                        <input type="submit" value="Create account" />
                    </p>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
