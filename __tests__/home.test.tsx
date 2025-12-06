import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders three coffee cards', () => {
  render(<Home />);
  const cards = screen.getAllByRole('heading', { level: 2 });
  expect(cards).toHaveLength(3);
  expect(cards[0]).toHaveTextContent('Espresso');
});