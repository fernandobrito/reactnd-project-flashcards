import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import { StyleSheet, View, Text } from 'react-native';

import reducer from './app/rootReducer';
import { purple } from './utils/colors'
import { fetchStateFromStorage, submitStateToStorage } from './utils/storage';
import { MainNavigator } from './app/navigation';
import CustomStatusBar from './ui/CustomStatusBar';
import { setDailyNotification } from './utils/notifications';

/* Update local storage after each store update */
const storageMiddleware = store => next => action => {
  next(action);
  submitStateToStorage(store.getState());
};

const store = createStore(reducer, applyMiddleware(storageMiddleware));

export default class App extends React.Component {
  state = { store: store, isLoading: false };

  // Adapted from: https://medium.com/@sumitkushwaha/syncing-redux-store-with-asyncstorage-in-react-native-2b8b890b9ca1
  componentWillMount() {
    this.setState({ isStoreLoading: true });

    setDailyNotification({ startingFromDay: 0, overwriteExisting: false });

    fetchStateFromStorage(this.props.dispatch).then((result) => {
      console.log('[Storage] Loading', result);

      if (result && result.length) {
        this.setState({
          store: createStore(reducer, JSON.parse(result), applyMiddleware(storageMiddleware))
        });
      } else {
        this.setState({ store: store });
      }

      this.setState({ isStoreLoading: false });
    }).catch((error) => {
      console.error('[Storage] Unable to load state', error)

      this.setState({ store: store });
      this.setState({ isStoreLoading: false });
    });
  }

  render() {
    if (this.state.isStoreLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});