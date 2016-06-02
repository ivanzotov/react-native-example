import I18n from 'react-native-i18n';
import moment from 'moment';

I18n.fallbacks = true;

I18n.translations = {
  'en-US': {
    workout: 'Workout',
    workouts: 'Workouts',
    notification: 'Notification',
    notifications: 'Notifications',
    programs: 'Programs',
    journal: 'Journal',
    notifications: 'Notifications',
    newNotification: 'New',
    exercises: 'Exercises',
    products: 'Products',
    water: 'Water',
    food: 'Food',
    newFood: 'New',
    profile: 'Profile',
    add: 'Add',
    edit: 'Edit',
    close: 'Close',
    done: 'Done',
    will_remind_hour_before: `We'll remind you about the workout for 1 hour before the start.`
  },

  'ru': {
    workout: 'Тренировка',
    workouts: 'Тренировки',
    notification: 'Напоминание',
    notifications: 'Напоминания',
    programs: 'Программы',
    journal: 'Дневник',
    notifications: 'Напоминания',
    newNotification: 'Новая',
    exercises: 'Упражнения',
    products: 'Продукты',
    water: 'Вода',
    food: 'Питание',
    newFood: 'Новая',
    profile: 'Профиль',
    add: 'Добавить',
    edit: 'Изменить',
    close: 'Закрыть',
    done: 'Готово',
    will_remind_hour_before: 'Мы напомним вам о тренировке за один час до начала.'
  }
}

if (!I18n.locale.match(/en/)) {
  let ruLocale = require('moment/locale/ru');
  moment.updateLocale('ru', ruLocale);
}

export default I18n;
export { I18n, moment };
