import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import { getDeckById } from './reducer';
import { connect } from "react-redux";

class DeckView extends React.Component {
  submit() {
    Alert.alert('title', 'lol');
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>

        <Text>{deck.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(
  null,
  null,
)(DeckView)
