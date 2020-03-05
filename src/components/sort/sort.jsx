import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SORTS} from '../../const.js';

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.handleSortClick = this.handleSortClick.bind(this);
  }
  handleSortClick() {
    this.setState((state) => (
      {isOpened: !state.isOpened}
    ));
  }

  getSortItemElement(activeSort, onSortItemClick, elem) {
    return (
      <li
        className={activeSort === elem.type ?
          `places__option places__option--active` :
          `places__option`}
        tabIndex="0"
        onClick={() => (onSortItemClick(elem.type))}
        key={elem.type}
      >
        {elem.text}
      </li>
    );
  }

  render() {
    const {activeSort, onSortItemClick} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleSortClick}>
          {SORTS.find((elem) => (elem.type === activeSort)).text}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={this.state.isOpened ?
            `places__options places__options--custom places__options--opened` :
            `places__options places__options--custom`}
        >
          {SORTS.map((elem) => (this.getSortItemElement(activeSort, onSortItemClick, elem)))}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onSortItemClick: PropTypes.func.isRequired,
};

export default Sort;
