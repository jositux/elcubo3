export const RESET_ITEMS = 'reset_items';
export const VIDEO_IS_PAUSED = 'video_is_paused';
export const SET_LEVEL2_VIDEO = 'set_level2_video';
export const CONTINUE_EXPERIENCE = 'continue_experience';
export const SET_ANSWER_CLICKED = 'answer_clicked';
export const SET_MESSAGE_AFTER_VIDEO = 'set_message_after_video';
export const MESSAGE_AFTER_VIDEO_ENDED = 'message_after_video_ended';
export const SET_TOAST = 'set_toast';
export const SET_CURRENT_ITEM = 'set_current_item';
export const SET_CURRENT_SPOT = 'set_current_spot';
export const SET_CURRENT_DOTS = 'set_current_dots';
export const SET_CURRENT_TRANSLATE = 'set_current_translate';
export const SET_CURRENT_TRIVIA = 'set_current_trivia_video';
export const SET_CURRENT_TRIVIA_VIDEO = 'set_current_trivia_video';
export const SET_CURRENT_MEMORY = 'set_current_memory';


export const resetItems = () => {
  return { type: RESET_ITEMS };
};

export const videoIsPaused = (payload) => {
  return { type: VIDEO_IS_PAUSED, payload };
};

export const setLevel2Video = (payload) => {
  return { type: SET_LEVEL2_VIDEO, payload };
};

export const setContinueExperience = (payload) => {
  return { type: CONTINUE_EXPERIENCE, payload };
};

export const setAnswerClicked = (payload) => {
  return { type: SET_ANSWER_CLICKED, payload };
};

export const setMessageAfterVideo = (payload) => {
  return { type: SET_MESSAGE_AFTER_VIDEO, payload };
};

export const onMessageAfterVideoEnded = () => {
  return { type: MESSAGE_AFTER_VIDEO_ENDED };
};

export const setToast = (payload) => {
  return { type: SET_TOAST, payload };
}

export const setCurrentSpot = (payload) => {
  return { type: SET_CURRENT_SPOT, payload };
};

export const setCurrentDots = (payload) => {
  return { type: SET_CURRENT_DOTS, payload };
};

export const setCurrentTranslate = (payload) => {
  return { type: SET_CURRENT_TRANSLATE, payload };
};

export const setCurrentTrivia = (payload) => {
  return { type: SET_CURRENT_TRIVIA, payload };
};

export const setCurrentTriviaVideo = (payload) => {
  return { type: SET_CURRENT_TRIVIA_VIDEO, payload };
};

export const setCurrentMemory = (payload) => {
  return { type: SET_CURRENT_MEMORY, payload };
};

export const setCurrentItem = (payload) => {
  return { type: SET_CURRENT_ITEM, payload };
};