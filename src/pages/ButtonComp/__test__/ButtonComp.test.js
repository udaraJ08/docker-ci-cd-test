import React from 'react'
import ButtonComp from "../ButtonComp";
import {render, screen} from "@testing-library/react";

it('Rendered without crashing',() => {
    render(<ButtonComp />)
    const text = screen.getByText('This is the button comps')
    expect(text).toBeInTheDocument()
});
