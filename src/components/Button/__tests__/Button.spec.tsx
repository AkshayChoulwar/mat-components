import React from "react";
import { render } from "@testing-library/react";
import Button from "..";

describe("Testing the new created button", () => {
    it("render the button with the title", () => {
        const app = render(<Button title="test"/>);
        expect(app).toBeDefined();
    })
})