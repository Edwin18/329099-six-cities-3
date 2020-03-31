import {extend} from '../../utils';
import {CommentsStore} from '../../types';

const initialState: CommentsStore = {
  currentComments: [],
};

const ActionType = {
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  POST_COMMENT: `POST_COMMENT`,
};

const ActionCreator = {
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  postComment: (comment) => ({
    type: ActionType.POST_COMMENT,
    payload: comment,
  }),
};

const Operation = {
  loadComments: (hotelId) => (dispatch, getState, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  postComment: (hotelId, commentInfo, form, btn) => (dispatch, getState, api) => {
    return api.post(`/comments/${hotelId}`, {
      comment: commentInfo.comment,
      rating: commentInfo.rating,
    })
      .then((response) => {
        dispatch(ActionCreator.postComment(response.data));
        form.reset();
        btn.disabled = `disabled`;
      })
      .catch(() => {
        form.classList.add(`error`);
        setTimeout(() => {
          form.classList.remove(`error`);
          btn.disabled = ``;
        }, 3000);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        currentComments: action.payload,
      });
    case ActionType.POST_COMMENT:
      return extend(state, {
        currentComments: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
