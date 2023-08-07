import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test("Should load Contact Us Component", () => {

    render(<Contact />)

    // check whether the heading is rendered correctly or not
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();

})

test("Should load button in Contact Us Component", () => {

    render(<Contact />)

    const button = screen.getByRole("button");
    //  const button = screen.getByText("Submit");

    // check whether the button is rendered or not
    // Assertion 
    expect(button).toBeInTheDocument();

})

test("Should load button in Contact Us Component", () => {

    render(<Contact />)

    const input = screen.getByPlaceholderText("Name");

    // check whether the input text in placeholder is present
    // Assertion 
    expect(input).toBeInTheDocument();

})