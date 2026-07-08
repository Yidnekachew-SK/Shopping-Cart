import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router';

export function renderWithRouter(element, { route = '/', context = [] } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route element={<Outlet context={context} />}>
          <Route path={route} element={element} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
