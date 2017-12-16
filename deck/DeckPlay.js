import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import globalStyles from '../ui/styles';
import { gray, red, green } from '../utils/colors';
import TextButton from '../ui/TextButton';
import CardFlippable from '../card/CardFlippable';
import setDailyNotification from '../utils/notifications';

class DeckPlay extends React.Component {
  static navigationOptions = {
    title: 'Deck Quiz'
  };

  state = { currentCard: 0, points: 0 };

  _navigateBack() {
    const navigate = NavigationActions.back();
    this.props.navigation.dispatch(navigate);
  }

  _hasFinishedGame() {
    const { deck } = this.props.navigation.state.params;
    return (this.state.currentCard + 1 === deck.cards.length + 1);
  }

  _finishedMessage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[styles.deckTitle, { textAlign: 'center' }]}>
          Good job! You have finished the deck!
        </Text>

        <View style={[styles.bottom, { marginTop: 40 }]}>
          <TextButton
            style={styles.secondaryButton}
            txtStyle={styles.secondaryButtonText}
            onPress={() => this._navigateBack()}
          >
            Back to deck
          </TextButton>
          <TextButton onPress={() => this._restartQuiz()}>
            Restart quiz!
          </TextButton>
        </View>
      </View>
    );
  }

  _restartQuiz() {
    this.setState({ currentCard: 0, points: 0 });
  }

  _nextCard(points) {
    this.setState(state => ({
      currentCard: (state.currentCard + 1),
      points: (state.points + points)
    }));
  }

  _content() {
    const { deck } = this.props.navigation.state.params;

    if (this._hasFinishedGame()) {
      setDailyNotification({ startingFromDay: 1, overwriteExisting: true });

      return this._finishedMessage();
    }

    return (
      <View style={{ flex: 0.7 }}>
        <CardFlippable card={deck.cards[this.state.currentCard]} />

        <View style={styles.bottom}>
          <TextButton
            style={styles.incorrectButton}
            onPress={() => this._nextCard(0)}
          >
            Incorrect
          </TextButton>
          <TextButton
            style={styles.correctButton}
            onPress={() => this._nextCard(1)}
          >
            Correct
          </TextButton>
        </View>
      </View>
    );
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>
          Card: #{Math.min(this.state.currentCard + 1, deck.cards.length)} of {deck.cards.length}
        </Text>
        <Text style={styles.deckDescription}>Score: {this.state.points}</Text>

        {this._content()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...globalStyles,
  center: {
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 35
  },
  deckDescription: {
    color: gray,
    fontSize: 25,
    padding: 0
  },
  bottom: {
    alignSelf: 'stretch'
  },
  incorrectButton: {
    marginBottom: 10,
    backgroundColor: red
  },
  correctButton: {
    backgroundColor: green
  }
});

export default DeckPlay;
