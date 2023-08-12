/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../Banner/Banner';

jest.mock('../../assets.js', () => ({
  banner01: 'banner-opacity.png',
}));

describe('Banner component', () => {
  test('should render the image with correct alt text and source', () => {
    const { getByAltText } = render(<Banner />);
    const bannerImage = getByAltText('Banner Burguer Queen');
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage.src).toContain('banner-opacity.png');
  });
});
