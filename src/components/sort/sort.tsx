import * as React from 'react';
import {connect} from 'react-redux';
import {SORTS} from '../../const';
import {ActionCreator} from '../../reducer/cities/cities';
import {getActiveSort} from '../../reducer/cities/selector';

type Props = {
  activeSort: string;
  onSortItemClick: (type: string) => void;
  onSortClick: () => void;
  isOpened: boolean;
};

const Sort: React.FC<Props> = ({activeSort, onSortItemClick, onSortClick, isOpened}) => {

  const _getSortItemElement = (elem) => (
    <li
      className={activeSort === elem.type ?
        `places__option places__option--active` :
        `places__option`}
      tabIndex={0}
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
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClick}>
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
