export const ParentNode = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`,
  FAVORITE: `FAVORITE`,
};

export const ApartamentType = {
  'apartment': `Apartment`,
  'room': `Private room`,
  'hotel': `Hotel`,
  'house': `House`,
};

export const SortType = {
  DEFAULT: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const SORTS = [
  {
    type: SortType.DEFAULT,
    text: `Popular`,
  },
  {
    type: SortType.TO_HIGH,
    text: `Price: low to high`,
  },
  {
    type: SortType.TO_LOW,
    text: `Price: high to low`,
  },
  {
    type: SortType.TOP_RATED,
    text: `Top rated first`,
  },
];

export const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

export const DELETE_MARKER = `DELETE_MARKER`;
