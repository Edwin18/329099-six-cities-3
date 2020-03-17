import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SORTS} from '../../const.js';
import {ActionCreator} from '../../reducer/cities/cities.js';
import {getActiveSort} from '../../reducer/cities/selector.js';

const Sort = ({activeSort, onSortItemClick, onSortClick, isOpened}) => {

  const _getSortItemElement = (elem) => (
    <li
      className={activeSort === elem.type ?
        `places__option places__option--active` :
        `places__option`}
      tabIndex="0"
      onClick={() => {
        onSortItemClick(elem.type);
        onSortClick();
      }}
      key={elem.type}
    >
      {elem.text}
    </li>
  );

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onSortClick}>
        {SORTS.find((elem) => (elem.type === activeSort)).text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={isOpened ?
          `places__options places__options--custom places__options--opened` :
          `places__options places__options--custom`}
      >
        {SORTS.map((elem) => (_getSortItemElement(elem)))}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onSortItemClick: PropTypes.func.isRequired,
  onSortClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: getActiveSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortItemClick(sort) {
    dispatch(ActionCreator.changeSort(sort));
  },
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
