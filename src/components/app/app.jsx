import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';

const headingLinkHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {available, offers} = this.props;

    return (
      <Main
        available={available}
        offers={offers}
        onHeadingLinkClick={headingLinkHandler}
      />
    );
  }
}

App.propTypes = {
  available: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired
  })).isRequired
};

export default App;
