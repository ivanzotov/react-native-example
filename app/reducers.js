import { combineReducers } from 'redux';

const notifications = (state = {
  items: []
}, action) => {
  switch (action.type) {
    case 'GET_NOTIFICATIONS':
      return {
        items: action.notifications
      }
    default:
      return state
  }
};

const newNotificationPopup = (state = {
  open: false
}, action) => {
  switch (action.type) {
    case 'OPEN_NEW_NOTIFICATION_POPUP':
      return Object.assign({}, state, {
        open: true
      });
    case 'CLOSE_NEW_NOTIFICATION_POPUP':
      return Object.assign({}, state, {
        open: false
      });
    default:
      return state;
  }
};

const editNotifications = (state = false, action) => {
  switch (action.type) {
    case 'ENABLE_EDIT_NOTIFICATIONS':
      return true;
    case 'DISABLE_EDIT_NOTIFICATIONS':
      return false;
    default:
      return state;
  }
};

const editModeNotifications = (state = false, action) => {
  switch (action.type) {
    case 'ENABLE_EDIT_MODE_NOTIFICATIONS':
      return true;
    case 'DISABLE_EDIT_MODE_NOTIFICATIONS':
      return false;
    default:
      return state;
  }
};

const sidebar = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return true;
    case 'CLOSE_SIDEBAR':
      return false;
    default:
      return state;
  }
};

const location = (state = 'workouts', action) => {
  switch (action.type) {
    case 'GOTO':
      return action.location;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notifications,
  newNotificationPopup,
  editModeNotifications,
  editNotifications,
  sidebar,
  location
});

export default rootReducer;
