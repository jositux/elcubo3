
import {
  RESET_ITEMS,
  VIDEO_IS_PAUSED,
  SET_LEVEL2_VIDEO,
  CONTINUE_EXPERIENCE,
  SET_ANSWER_CLICKED,
  SET_MESSAGE_AFTER_VIDEO,
  MESSAGE_AFTER_VIDEO_ENDED,
  SET_TOAST,
  SET_CURRENT_ITEM,
  SET_CURRENT_SPOT,
  SET_CURRENT_DOTS,
  SET_CURRENT_TRANSLATE,
  SET_CURRENT_TRIVIA,
  SET_CURRENT_TRIVIA_VIDEO,
  SET_CURRENT_MEMORY
} from '../actions/interactive';

const initialState = {
  currentSpot: null,
  currentDots: null,
  currentTranslate: null,
  currentTrivia: null,
  currentTriviaVideo: null,
  currentMemory: null,
  videoIsPaused: false,
  continueExperience: false,
  answerClicked: false,
  messageAfterVideo: null,
  level2Video: null,
  toast: null,
  currentItem: null,
};

const interactiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ITEMS:
      if ((state.currentMemory || state.currentSpot || state.currentDots) && !state.answerClicked) {
        state.messageAfterVideo = state.currentItem.field_ec_text_default || ' ';
      }
      const newState = {
        ...state,
        currentSpot: null,
        currentDots: null,
        currentTranslate: null,
        currentTrivia: null,
        currentTriviaVideo: null,
        currentMemory: null,
        currentItem: null,
        continueExperience: false,
        level2Video: null,
        videoIsPaused: false,
      };
      return newState;

    case SET_MESSAGE_AFTER_VIDEO:
      return {
        ...state,
        messageAfterVideo: action.payload
      };

    case MESSAGE_AFTER_VIDEO_ENDED:
      return {
        ...state,
        messageAfterVideo: null
      };

    case VIDEO_IS_PAUSED:
      return {
        ...state,
        videoIsPaused: action.payload
      };

    case SET_LEVEL2_VIDEO:
      return {
        ...state,
        level2Video: action.payload
      };

    case CONTINUE_EXPERIENCE:
      return {
        ...state,
        continueExperience: action.payload
      };

    case SET_ANSWER_CLICKED:
      return {
        ...state,
        answerClicked: action.payload
      };

    case SET_TOAST:
      return {
        ...state,
        toast: action.payload
      };

    case SET_CURRENT_SPOT:
      return {
        ...state,
        currentSpot: action.payload,
        currentItem: action.payload,
      };

    case SET_CURRENT_DOTS:
      return {
        ...state,
        currentDots: action.payload,
        currentItem: action.payload,
      };

    case SET_CURRENT_TRANSLATE:
      return {
        ...state,
        currentTranslate: action.payload,
        currentItem: action.payload,
      };

    case SET_CURRENT_TRIVIA:
      return {
        ...state,
        currentTrivia: action.payload,
        currentItem: action.payload,
      };

    case SET_CURRENT_TRIVIA_VIDEO:
      return {
        ...state,
        currentTriviaVideo: action.payload,
        currentItem: action.payload,
      };

    case SET_CURRENT_MEMORY:
      return {
        ...state,
        currentMemory: action.payload,
        currentItem: action.payload,
      };

    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state
  }
};

export default interactiveReducer;