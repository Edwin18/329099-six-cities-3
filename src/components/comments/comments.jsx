import React, {PureComponent, createRef} from 'react';
import PropType from 'prop-types';

const CORRECT_COMMENT_LENGTH = 50;

class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.commentRef = createRef();
    this.form = createRef();
    this.ratingContainer = createRef();
    this.submitBtn = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this._checkBtnStatus = this._checkBtnStatus.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit, hotelId} = this.props;

    evt.preventDefault();
    this.submitBtn.current.disabled = `disabled`;

    onSubmit(hotelId, {
      comment: this.commentRef.current.value,
      rating: this._getRating(),
    }, this.form.current, this.submitBtn.current);
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action=""
        onSubmit={this.handleSubmit}
        onChange={this._checkBtnStatus}
        ref={this.form}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div
          className="reviews__rating-form form__rating"
          ref={this.ratingContainer}>
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" maxLength="300" required
          ref={this.commentRef}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="disabled" ref={this.submitBtn}>Submit</button>
        </div>
      </form>
    );
  }

  _checkBtnStatus() {
    if (parseInt(this._getRating(), 10) && this.commentRef.current.value.length >= CORRECT_COMMENT_LENGTH) {
      this.submitBtn.current.disabled = ``;
    }
  }

  _getRating() {
    let rating = 0;
    const allInputs = Array.from(this.ratingContainer.current.querySelectorAll(`.form__rating-input`));

    allInputs.forEach((elem) => {
      if (elem.checked) {
        rating = elem.value;
      }
    });

    return rating;
  }
}

Comments.propTypes = {
  onSubmit: PropType.any,
  hotelId: PropType.any,
};

export default Comments;
