import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import LocationsItem from './locations-item';

Enzyme.configure({
  adapter: new Adapter(),
});

const city = `Amsterdam`;

it(`When user click on city must be`, () => {
  const onCityLinkClick = jest.fn();

  const locationsItem = Enzyme.shallow(
      <LocationsItem
        city={city}
        isActive={true}
        onCityLinkClick={onCityLinkClick}
      />
  );

  const cityLink = locationsItem.find(`.locations__item-link`);

  cityLink.simulate(`click`);

  expect(onCityLinkClick).toBeCalledWith(city);
});
