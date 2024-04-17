import { render, screen } from "@testing-library/react";
import Reservations from "./Reservations";

test('Renders the BookingForm heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Occasion");
    expect(headingElement).toBeInTheDocument();
})