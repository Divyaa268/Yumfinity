import { render, screen } from "@testing-library/react";
import Contact from "../Contact";


test("Should load Contact Us Component", () => {

    render(<Contact />)

    // check whether the heading is rendered correctly or not
    const heading = screen.getByRole("heading");

    hasExpectedRequestMetadata(heading).toBeInTheDocument();

})