import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Component", () => {
    test("renders the form", () => {
        render(<App />);
        expect(
            screen.getByText(/Fill out this awesome form/i)
        ).toBeInTheDocument();
    });

    test("shows validation errors on submit without filling the form", () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Create account/i));

        expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/password is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Colour is required/i)).toBeInTheDocument();
        expect(
            screen.getByText(/At least two animals must be chosen/i)
        ).toBeInTheDocument();
    });

    test("submits the form with valid data", () => {
        render(<App />);

        // Fill out the form
        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByLabelText(/Password/i), {
            target: { value: "password123" },
        });
        fireEvent.change(screen.getByLabelText(/Colour/i), {
            target: { value: "blue" },
        });
        fireEvent.click(screen.getByRole("checkbox", { name: /Bear/i }));
        fireEvent.click(screen.getByRole("checkbox", { name: /Tiger/i }));
        fireEvent.change(screen.getByLabelText(/Type of tiger/i), {
            target: { value: "Bengal" },
        });

        fireEvent.click(screen.getByText(/Create account/i));

        // Make sure no validation errors are shown
        expect(screen.queryByText(/Invalid email address/i)).toBeNull();
        expect(
            screen.queryByText(/Password must be longer than 8 characters/i)
        ).toBeNull();
        expect(screen.queryByText(/Colour is required/i)).toBeNull();
        expect(
            screen.queryByText(/At least two animals must be chosen/i)
        ).toBeNull();
        expect(
            screen.queryByText(/Type of tiger is required if Tiger is chosen/i)
        ).toBeNull();
    });

    test("shows validation error for Type of tiger if Tiger is selected but Type of tiger is empty", () => {
        render(<App />);

        // Fill out the form with Tiger selected but without Type of tiger
        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByLabelText(/Password/i), {
            target: { value: "password123" },
        });
        fireEvent.change(screen.getByLabelText(/Colour/i), {
            target: { value: "blue" },
        });
        fireEvent.click(screen.getByRole("checkbox", { name: /Bear/i }));
        fireEvent.click(screen.getByRole("checkbox", { name: /Tiger/i }));

        fireEvent.click(screen.getByText(/Create account/i));

        // Make sure validation error for Type of tiger is shown
        expect(
            screen.getByText(/Type of tiger is required if Tiger is chosen/i)
        ).toBeInTheDocument();
    });
});
