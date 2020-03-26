import React, {PureComponent} from 'react';

const withHover = (Component) => {
  class WithHover extends PureComponent {
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
