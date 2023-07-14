import { render, screen } from '@testing-library/react';

import Index from '@/pages'; // Path to your Index component

import { Main } from './Main'; // Path to your Main component

describe('Main Component', () => {
  it('renders Index page correctly', () => {
    render(
      <Main meta={null}>
        <Index />
      </Main>,
    );

    // This will find a unique element on the Index page to assert is being rendered correctly
    const heading = screen.getByRole('heading', {
      name: /Open Audio Collective/,
    });

    expect(heading).toBeInTheDocument();
  });
});
