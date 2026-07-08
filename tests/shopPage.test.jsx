import { vi, describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from 'react-router';
import userEvent from "@testing-library/user-event";
import ShopPage from '../src/Components/shopPage.jsx';
import {renderWithRouter} from './test-util.jsx';

const mockContext = [
  [{ id: 1, title: 'Test Item', image: null, price: 10, count: 1, category: "men\'s clothing" }],   // shoppingCards
  vi.fn(),    // setShoppingCards
  [{ id: 1, title: 'Test Item', image: null, price: 10, count: 1, category: "men\'s clothing" }], // allCards
  vi.fn(),  // setAllCards
  [],       // cartItems
  vi.fn(),    // setCartItems
];


describe("Shop page components", () => {

  it("Filtering options are rendered correctly", () => {
    renderWithRouter(<ShopPage />, {route: '/shop', context: mockContext});

    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(`Men's`)).toBeInTheDocument();
    expect(screen.getByText(/Women's/i)).toBeInTheDocument();
    expect(screen.getByText(/Jewelry/i)).toBeInTheDocument();
    expect(screen.getByText(/Electronics/i)).toBeInTheDocument();
  });

  it("Item cards are rendered correctly", async () => {
    renderWithRouter(<ShopPage />, {route: '/shop', context: mockContext});

    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10/i)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();

    const buttons = screen.getByRole('button', { name: /Add to Cart/i });
    expect(buttons).toBeInTheDocument();
  });

  it("calls setCartItems when Add to Cart is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<ShopPage />, {route: '/shop', context: mockContext});

    const button = screen.getByRole('button', { name: /Add to Cart/i });
    await user.click(button);

    expect(mockContext[5]).toHaveBeenCalled();  // setCartItems is called to add the item to cartItems
  });

  it("increments and decrements count when Plus/Minus clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<ShopPage />, {route: '/shop', context: mockContext});

    const countDisplay = screen.getByText("1");
    const plusButton = screen.getByTestId('increaseCount')
    const minusButton = screen.getByTestId('decreaseCount');

    await user.click(plusButton);
    expect(mockContext[1]).toHaveBeenCalled(); // setShoppingCards is called to update the count

    await user.click(minusButton);
    expect(mockContext[1]).toHaveBeenCalled(); 
  });
});