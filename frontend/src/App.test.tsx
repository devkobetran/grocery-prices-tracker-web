import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders home link', () => {
    // Wrap the App component inside BrowserRouter
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Home/i); // Ensure to point to an actual text in your App
    expect(linkElement).toBeInTheDocument();
  });
