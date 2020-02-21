import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;

    this.headingLinkHandler = this.headingLinkHandler.bind(this);
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  headingLinkHandler(offer) {
    this.setState(offer);
  }

  _renderApp() {
    const {available, offers} = this.props;

    if (this.state) {
      return (
        <Property
          offer={this.state}
          onHeadingLinkClick={this.headingLinkHandler}
        />
      );
    }

    if (!this.state) {
      return (
        <Main
          available={available}
          offers={offers}
          onHeadingLinkClick={this.headingLinkHandler}
        />
      );
    }

    return null;
  }
}

App.propTypes = {
  available: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    img: PropTypes.arrayOf(PropTypes.string).isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    household: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.exact({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }).isRequired,
    cords: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired
};

export default App;
