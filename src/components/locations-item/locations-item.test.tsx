import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LocationsItem from './locations-item';

const city = `Amsterdam`;

it(`Render <LocationsItem />`, () => {
  const tree = renderer
    .create(<LocationsItem
      city={city}
      isActive={true}
      onCityLinkClick={() => ({})}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
