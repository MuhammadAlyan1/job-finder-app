import Modal from '../Modal';
import { renderWithProviders } from '../../testUtils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

describe('Test mobile searchbar component', () => {
  test('It should render location bar', () => {
    renderWithProviders(<Modal />);

    const locationField = screen.getByPlaceholderText(/filter by location/i);
    expect(locationField).toBeInTheDocument();
  });

  test('It should render full time only checkbox', () => {
    renderWithProviders(<Modal />);

    const fullTimeOnly = screen.getByText(/full time only/i);
    expect(fullTimeOnly).toBeInTheDocument();
  });

  test('It should render search button', () => {
    renderWithProviders(<Modal />);

    const searchButton = screen.getByText(/search/i);
    expect(searchButton).toBeInTheDocument();
  });
});
