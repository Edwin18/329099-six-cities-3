import * as React from 'react';

const COMMENTS_LENGTH = {
  MIN: 50,
  MAX: 300,
};

type Props = {
  onSubmit: (hotelId: number, {}, form: HTMLFormElement, btn: HTMLButtonElement) => void;
  hotelId: number;
};

class Comments extends React.PureComponent<Props, {}> {
  commentRef: React.RefObject<HTMLTextAreaElement>;
  form: React.RefObject<HTMLFormElement>;
  ratingContainer: React.RefObject<HTMLDivElement>;
  submitBtn: React.RefObject<HTMLButtonElement>;

  constructor(props: Props) {
    super(props);

    this.commentRef = React.createRef();
    this.form = React.createRef();
    this.ratingContainer = React.createRef();
    this.submitBtn = React.createRef();

    this._handleCommentsSubmit = this._handleCommentsSubmit.bind(this);
    this._checkBtnStatus = this._checkBtnStatus.bind(this);
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action=""
        onSubmit={this._handleCommentsSubmit}
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
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength={COMMENTS_LENGTH.MIN} maxLength={COMMENTS_LENGTH.MAX} required
          ref={this.commentRef}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled ref={this.submitBtn}>Submit</button>
        </div>
      </form>
    );
  }

  _handleCommentsSubmit(evt: React.SyntheticEvent): void {
    const {onSubmit, hotelId} = this.props;

    evt.preventDefault();
    this.submitBtn.current.disabled = true;

    onSubmit(hotelId, {
      comment: this.commentRef.current.value,
      rating: this._getRating(),
    }, this.form.current, this.submitBtn.current);
  }

  _checkBtnStatus(): void {
    if (this._getRating() && this.commentRef.current.value.length >= COMMENTS_LENGTH.MIN) {
      this.submitBtn.current.disabled = false;
    }
  }

  _getRating(): number {
    let rating: string;
    const allInputs: Array<HTMLInputElement> = Array.from(this.ratingContainer.current.querySelectorAll(`.form__rating-input`));

    allInputs.forEach((elem) => {
      if (elem.checked) {
        rating = elem.value;
      }
    });

    return parseInt(rating, 10);
  }
}

export default Comments;
