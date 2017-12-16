import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { getDecks } from './reducer';
import Header from '../ui/Header';
import { gray } from '../utils/colors';
import globalStyles from '../ui/styles';

const IndividualDeck = (props) => {
  const navigate = NavigationActions.navigate({ routeName: 'DeckView', params: { deckId: props.deck.id } });

  return (
    <TouchableHighlight
      onPress={() => props.navigation.dispatch(navigate)}
      style={styles.deckList_item}
    >
      <View>
        <Text style={styles.deckList_item__title}>
          {props.deck.title}
        </Text>
        <Text style={styles.deckList_item__description}>
          {props.deck.cards.length} {props.deck.cards.length === 1 ? 'card' : 'cards'}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

class DeckList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>Deck List</Header>

        <ScrollView contentContainerStyle={styles.deckList}>
          {this.props.decks.map(deck => <IndividualDeck deck={deck} key={deck.id} {...this.props} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...globalStyles,
  deckList: {
    flexDirection: 'column',
    marginVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray'
  },
  deckList_item: {
    alignSelf: 'stretch',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  deckList_item__title: {
    fontSize: 25,
    textAlign: 'left'
  },
  deckList_item__description: {
    color: gray,
    fontSize: 15,
    textAlign: 'right'
  }
});

function mapStateToProps(state) {
  return {
    decks: getDecks(state)
  };
}

export default connect(mapStateToProps)(DeckList);
