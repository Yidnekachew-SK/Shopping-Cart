import { vi, describe, it, expect } from 'vitest';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from '../src/Components/cartPage.jsx';
import {renderWithRouter} from './test-util.jsx';

const mockContext = [
  [{ id: 1, title: 'Test Item', description: 'Blue cotton shirt', image: null, price: 20, count: 2, category: "men's clothing" }],
  vi.fn(),
  [{ id: 1, title: 'Test Item', description: 'Blue cotton shirt', image: null, price: 20, count: 2, category: "women's clothing" }], 
  vi.fn(),
  [{ id: 1, title: 'Test Item', description: 'Blue cotton shirt', image: null, price: 20, count: 2, category: "women's clothing" }],
  vi.fn(),
];


describe("Cart page components", () => {

  it("cart items are rendered correctly", () => {
    renderWithRouter(<CartPage />, {route: '/cart', context: mockContext})

    expect(screen.getByRole('heading', {name: 'Cart Items'}))
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
    expect(screen.getByText(/Blue cotton shirt/i)).toBeInTheDocument();
    expect(screen.getByText(/\$20/i)).toBeInTheDocument();
    expect(screen.getByTestId('cart-increaseCount')).toBeInTheDocument();
    expect(screen.getByTestId('cart-decreaseCount')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /CheckOut/i })).toBeInTheDocument();
  });

  it("Displays correct price details", async () => {
    renderWithRouter(<CartPage />, {route: '/cart', context: mockContext})

    expect(screen.getByRole('heading', {name: 'Order summary'}));
    expect(screen.getByText(/Subtotal:/i).nextSibling.textContent).toBe("40");
    expect(screen.getByText(/Shipping fee:/i).nextSibling.textContent).toBe("0");
    expect(screen.getByText(/VAT:/i).nextSibling.textContent).toBe("6");
    expect(screen.getByText(/Total Price:/i).nextSibling.textContent).toBe("46");
  });

  it("increments and decrements count when Plus/Minus clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<CartPage />, {route: '/cart', context: mockContext});

    const countDisplay = screen.getByText("2");
    const plusButton = screen.getByTestId('cart-increaseCount')
    const minusButton = screen.getByTestId('cart-decreaseCount');

    await user.click(plusButton);
    expect(mockContext[5]).toHaveBeenCalled();    // setShoppingCards is called to update the count

    await user.click(minusButton);
    expect(mockContext[5]).toHaveBeenCalled(); 
  });
});