import * as React from 'react';
import {Offer} from '../../types';

const withHover = (Component) => {
  type Props = {
    offers: Array<Offer>;
    activeCity: string;
  }

  type State = {
    hoveredOffer: null | Offer;
  }

  class WithHover extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        hoveredOffer: null,
      };

      this.handlePalceCardHover = this.handlePalceCardHover.bind(this);
    }

    handlePalceCardHover(offer) {
      this.setState({
        hoveredOffer: offer
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          hoveredOffer={this.state.hoveredOffer}
          onPlaceCardHover={this.handlePalceCardHover}
        >
        </Component>
      );
    }
  }

  return WithHover;
};

export default withHover;
