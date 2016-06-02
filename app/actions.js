import I18n, { moment } from './locales';
import { generateUUID } from './utils';

import {
  PushNotificationIOS,
  AsyncStorage
} from 'react-native';

const openNewNotificationPopup = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'OPEN_NEW_NOTIFICATION_POPUP'
    });
  };
};

const closeNewNotificationPopup = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_NEW_NOTIFICATION_POPUP'
    });
  };
};

const addNotification = date => {
  return (dispatch, getState) => {
    let notification = {
      uuid: generateUUID(),
      date: date
    };

    AsyncStorage.getItem('notifications', (err, notifications) => {
      if (notifications && JSON.parse(notifications).length > 0) {
        notifications = [...JSON.parse(notifications), notification].sort((a, b) =>
          new Date(a.date) - new Date(b.date)
        )
      } else {
        notifications = [notification];
      }

      AsyncStorage.setItem('notifications', JSON.stringify(notifications), () => {
        if (notifications.length > 0) {
          dispatch(enableEditNotifications());
        }

        dispatch({
          type: 'GET_NOTIFICATIONS',
          notifications: notifications
        });

        let fireDate = moment(notification.date)
                   .subtract(1, 'hour')
                   .set('second', 0)
                   .toDate();

        if (notification.date > new Date()) {
          PushNotificationIOS.scheduleLocalNotification({
            fireDate: fireDate.getTime(),
            alertBody: `${I18n.t('notification')}: ${moment(notification.date).calendar()}`,
            userInfo: { uuid: notification.uuid }
          });
        }
      });
    });
  };
};

const getNotifications = () => {
  return (dispatch, getState) => {
    AsyncStorage.getItem('notifications', (err, notifications) => {
      if (!err && notifications) {
        dispatch({
          type: 'GET_NOTIFICATIONS',
          notifications: JSON.parse(notifications).sort((a, b) =>
            new Date(a.date) - new Date(b.date)
          )
        });

        if (getState().notifications.items.length > 0) {
          dispatch(enableEditNotifications());
        } else {
          dispatch(disableEditNotifications());
        }
      }
    });
  };
};

const enableEditModeNotifications = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ENABLE_EDIT_MODE_NOTIFICATIONS'
    });
  };
};

const disableEditModeNotifications = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'DISABLE_EDIT_MODE_NOTIFICATIONS'
    });
  };
};

const enableEditNotifications = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ENABLE_EDIT_NOTIFICATIONS'
    });
  };
};

const disableEditNotifications = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'DISABLE_EDIT_NOTIFICATIONS'
    });
  };
};

const removeNotification = (notification) => {
  return (dispatch, getState) => {
    AsyncStorage.getItem('notifications', (err, notifications) => {
      if (notifications && JSON.parse(notifications).length > 0) {
        let filtered_notifications = JSON.parse(notifications).filter((i) => i.uuid != notification.uuid);

        notifications = filtered_notifications.sort((a, b) =>
          new Date(a.date) - new Date(b.date)
        )
      } else {
        notifications = [];
      }

      AsyncStorage.setItem('notifications', JSON.stringify(notifications), () => {
        PushNotificationIOS.cancelLocalNotifications({uuid: notification.uuid});

        dispatch({
          type: 'GET_NOTIFICATIONS',
          notifications: notifications
        });

        if (notifications.length === 0) {
          dispatch(disableEditModeNotifications());
          dispatch(disableEditNotifications());
        }
      });
    });
  };
};

const openSidebar = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'OPEN_SIDEBAR'
    });
  };
};

const closeSidebar = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_SIDEBAR'
    });
  };
};

const goTo = (location) => {
  return (dispatch, getState) => {
    dispatch(closeSidebar());
    dispatch({
      type: 'GOTO',
      location
    });
  };
};

export {
  openNewNotificationPopup,
  closeNewNotificationPopup,
  addNotification,
  getNotifications,
  enableEditNotifications,
  disableEditNotifications,
  enableEditModeNotifications,
  disableEditModeNotifications,
  removeNotification,
  openSidebar,
  closeSidebar,
  goTo
};

