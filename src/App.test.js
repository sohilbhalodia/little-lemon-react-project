import {  render, screen } from '@testing-library/react';
import Booking from './booking';
import { BrowserRouter } from 'react-router-dom';


test('Booking form', () => {
  
  render(
    <BrowserRouter>
      <Booking />
    </BrowserRouter>);
    const firstname = screen.getByLabelText(/First Name/i);
    expect(firstname).toBeRequired();

    const lastName = screen.getByLabelText(/Last Name/i);
    expect(lastName).toBeRequired();

    const Email = screen.getByLabelText(/Email/i);
    expect(Email).toBeRequired();

    const choosedate = screen.getByLabelText(/Choose Date/i);
    expect(choosedate).toBeRequired();

    const ChooseTime = screen.getByLabelText(/Choose Time/i);
    expect(ChooseTime).toBeRequired();

    const numberofguest = screen.getByLabelText(/Number of Guest/i);
    expect(numberofguest).toBeRequired();

    expect(firstname).toHaveValue(value, {''});

    const makeabooking = screen.getByRole('button', {name:'Make a booking'});
    expect(makeabooking).toBeDisabled();

});
