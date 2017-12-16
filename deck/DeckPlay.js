import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import globalStyles from '../ui/styles';
import { gray, black, white, red, green } from '../utils/colors';
import TextButton from '../ui/TextButton';
import CardFlippable from '../card/CardFlippable';

class DeckPlay extends React.Component {
  static navigationOptions = {
    title: 'Deck Quiz'
  };

  state = { currentCard: 0, points: 0 };

  nextCard(points) {
    this.setState((state) => (
      { currentCard: (state.currentCard + 1), points: (state.points + points) }
    ));
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>Card: # {this.state.currentCard + 1} of {deck.cards.length}</Text>
        <Text style={styles.deckDescription}>Score: {this.state.points}</Text>

        <CardFlippable card={deck.cards[this.state.currentCard]} />

        <View style={styles.bottom}>
          <TextButton
            style={styles.incorrectButton}
            onPress={() => this.nextCard(0)}
          >
            Incorrect
          </TextButton>
          <TextButton
            style={styles.correctButton}
            onPress={() => this.nextCard(1)}
          >
            Correct
          </TextButton>
        </View>
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
    fontSize: 35,
  }, deckDescription: {
    color: gray,
    fontSize: 25,
    padding: 0
  }, bottom: {
    alignSelf: 'stretch',
  }, incorrectButton: {
    marginBottom: 10,
    backgroundColor: red
  }, correctButton: {
    backgroundColor: green
  }
});

export default DeckPlay;