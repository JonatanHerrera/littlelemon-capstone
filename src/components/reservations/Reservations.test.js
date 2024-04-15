import { render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

test('Renders the BookingForm heading', () => {
    render(<ReservationForm avalibleTimes={ [
      {id:1,value: '17:00',avalible: true},
      {id:2,value: '18:00',avalible: true},
      {id:3,value: '19:00',avalible: true},
      {id:4,value: '20:00',avalible: true},
      {id:5,value: '21:00',avalible: true},
      {id:6,value: '22:00',avalible: true}]} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})