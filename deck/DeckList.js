import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";
import { Alert } from "react-native";

import { getDecks } from "./index";
import Header from "../ui/Header";
import { gray } from "../utils/colors";

const IndividualDeck = (props) => {
  return (
    <TouchableHighlight onPress={() => Alert.alert("hey")} style={styles.deckList_item}>
      <View>
        <Text style={styles.deckList_item__title}>
          {props.deck.title}
        </Text>
        <Text style={styles.deckList_item__description}>
          {props.deck.cards.length} cards
        </Text>
      </View>
    </TouchableHighlight>
  )
}

class DeckList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>Deck List</Header>

        <View style={styles.deckList}>
          {this.props.decks.map((deck) => {
            return <IndividualDeck deck={deck} key={deck.id} />
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  }, deckList: {
    flexDirection: 'column',
    paddingVertical: 20,
    alignItems: 'center'
  }, deckList_item: {
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: 10
  }, deckList_item__title: {
    fontSize: 25
  }, deckList_item__description: {
    color: gray,
    fontSize: 15,
    alignItems: 'center'
  }

});

function mapStateToProps(state) {
  return {
    decks: getDecks(state)
  }
}

export default connect(
  mapStateToProps
)(DeckList)
