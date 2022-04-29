// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('should render menu', () => {
    const { getAllByText } = render(<Header />);

    expect(getAllByText('Feed')).toBeTruthy();
    expect(getAllByText('Places')).toBeTruthy();
    expect(getAllByText('Featured')).toBeTruthy();
    expect(getAllByText('About Us')).toBeTruthy();
    expect(getAllByText('LOGOUT')).toBeTruthy();
  });
});
