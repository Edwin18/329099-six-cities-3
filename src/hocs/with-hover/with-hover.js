import React, {PureComponent} from 'react';
import {SortType} from '../../const.js';

const withHover = (Component) => {
  class WithHover extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hoveredOffer: null,
        activeSort: SortType.DEFAULT,
      };

      this.handlePalceCardHover = this.handlePalceCardHover.bind(this);
      this.handleSortTypeClick = this.handleSortTypeClick.bind(this);
    }

    handlePalceCardHover(offer) {
      this.setState({
        hoveredOffer: offer
      });
    }

    handleSortTypeClick(sortType) {
      this.setState({
        activeSort: sortType,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          hoveredOffer={this.state.hoveredOffer}
          activeSort={this.state.activeSort}
          onPlaceCardHover={this.handlePalceCardHover}
          onSortItemClick={this.handleSortTypeClick}
        >
        </Component>
      );
    }
  }

  return WithHover;
};

export default withHover;
