import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import globalStyles from '../ui/styles';
import { gray } from '../utils/colors';
import TextButton from '../ui/TextButton';
import { getDeck, getMostRecentDeck } from './reducer';

class DeckView extends React.Component {
  static navigationOptions = {
    title: 'View Deck'
  };

  _navigateTo(routeName, params = {}) {
    const navigate = NavigationActions.navigate({ routeName, params });
    this.props.navigation.dispatch(navigate);
  }

  render() {
    const { deck } = this.props;

    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>{deck.cards.length} {deck.cards.length === 1 ? 'card' : 'cards'}</Text>

        <View style={styles.bottom}>
          <TextButton
            style={styles.secondaryButton}
            txtStyle={styles.secondaryButtonText}
            onPress={() => this._navigateTo('CardAdd', { deck })}
          >
            Add card
          </TextButton>
          <TextButton onPress={() => this._navigateTo('DeckPlay', { deck })}>
            Start quiz!
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
  },
  deckDescription: {
    color: gray,
    fontSize: 25,
    padding: 20
  },
  bottom: {
    alignSelf: 'stretch',
  }
});

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.navigation.state.params;
  let deck;

  if (deckId) {
    deck = getDeck(state, deckId);
  } else {
    deck = getMostRecentDeck(state);
  }

  return {
    deck
  };
}

export default connect(
  mapStateToProps,
  null,
)(DeckView);
