import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router';
import userEvent from "@testing-library/user-event";
import HomePage from '../src/Components/homepage.jsx';

describe("Homepage components", () => {
  it("homepage is rendered correctly", () => {
    render(
      <MemoryRouter>
      <HomePage />
      </MemoryRouter>
    )
    
    const message = screen.getByText(/Welcome to NovaMart/i);
    const description = screen.getByText(/Discover trending products, exclusive deals/i);
    const image = screen.getByAltText(/home page image of shopping/i);
    const button = screen.getByRole("button", {name: "Shop Now"})

    expect(message).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("navigate to shop page when shop now button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<div>Shop Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: /shop now/i }));

    expect(screen.getByText(/shop page/i)).toBeInTheDocument();
  });
});