import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Index />);

      const heading = screen.getByRole('heading', {
        name: /Open Audio Collective/,
      });

      expect(heading).toBeInTheDocument();
    });

    it('should have a link to the github org', () => {
      render(<Index />);

      const link = screen.getByRole('link', {
        name: /openaudiocollective/i, // Use a case-insensitive regex to match the link text.
      });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/openaudiocollective',
      );
    });
  });
});
