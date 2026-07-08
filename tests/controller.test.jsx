import { vi, describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router';
import userEvent from "@testing-library/user-event";
import Controller from '../src/Components/controller.jsx';
import {renderWithRouter} from './test-util.jsx';

const mockContext = [
  [{ id: 1, title: 'Test Item', description: 'Blue cotton shirt', image: null, price: 20, count: 2, category: "men's clothing" }],
  vi.fn(),
  [{ id: 1, title: 'Test Item', description: 'Blue cotton shirt', image: null, price: 20, count: 2, category: "women's clothing" }], 
  vi.fn(),
  [{ id: 1, title: 'Test Item', description: 'Blue cotton shirt', image: null, price: 20, count: 2, category: "women's clothing" }],
  vi.fn(),
];

describe("Navigation and footer components", () => {
  it("navigation  and footer components are rendered correctly", () => {
    renderWithRouter(<Controller />, {route: '/', context: mockContext})

    expect(screen.getByRole('heading', {name: 'NovaMart'}))
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByTestId('cartIcon')).toBeInTheDocument();
    expect(screen.getByText(/Yidnekachew-SK/i)).toBeInTheDocument();
  });

  it("Links go to the corresponding page", async () => {
    const user = userEvent.setup();
    //render(<Controller />);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Controller />}>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/shop" element={<div>Shop Page</div>} />
            <Route path="/cart" element={<div>Cart Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    await user.click(screen.getByRole('link', { name: /Home/i }));
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /Shop/i }));
    expect(screen.getByText(/Shop Page/i)).toBeInTheDocument();

    await user.click(screen.getByTestId('cartIcon'));
    expect(screen.getByText(/Cart Page/i)).toBeInTheDocument();
  });
});