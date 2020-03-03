import React from 'react';
import renderer from 'react-test-renderer';
import LocationsItem from './locations-item.jsx';

const city = `Amsterdam`;

it(`Render LocationsItem`, () => {
  const tree = renderer
    .create(<LocationsItem
      city={city}
      isActive={true}
      onCityLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
