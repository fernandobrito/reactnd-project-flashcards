import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'fernandobrito-mobile-flashcards:notification';

function createNotification() {
  return {
    title: 'Go through your deck of flash cards!',
    body: "👋 don't forget to go through your deck of flash cards today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
}

/* Adapted from: https://github.com/udacity/reactnd-UdaciFitness-complete/blob/app-prep/utils/helpers.js
  On initialization, set daily notifications starting from today if it was not set before
  After finishing a deck, overwrite existing notifications and set daily starting from tomorrow

  If user played a deck and opened and closed the app, existing notification won't be overwritten
  and next notification will start from tomorrow.

  Check logs to a better understanding.
*/
function setDailyNotification({ startingFromDayOffeset = 0, overwriteExisting = false }) {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    if (status !== 'granted') return;

    AsyncStorage.getItem(NOTIFICATION_KEY).then((data) => {
      console.log('[Notification] Loading', data);
      const dataJson = JSON.parse(data);

      if (dataJson && !overwriteExisting) {
        console.log('[Notification] Existing data and no overwriting');
        return;
      }

      Notifications.cancelAllScheduledNotificationsAsync();

      const startDate = new Date();
      startDate.setDate(startDate.getDate() + startingFromDayOffeset);
      startDate.setHours(20);
      startDate.setMinutes(0);

      Notifications
        .scheduleLocalNotificationAsync(createNotification(), { time: startDate, repeat: 'day' });

      console.log('[Notification] Creating daily notifications, starting from:', startDate);
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    });
  });
}

export default setDailyNotification;
