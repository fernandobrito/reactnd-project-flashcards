import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import { getDeckById } from './index';

class DeckView extends React.Component {
  submit() {
    Alert.alert('title', 'lol');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>

        <Text>What is the title of your deck?</Text>

        <TextInput
          editable = {true}
          maxLength = {40}
        />

        <TextButton style={{ padding: 10 }} onPress={this.submit}>
          Submit
        </TextButton>
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

function mapStateToProps(state) {
  return {
    deck: getDeckByIdyId(state, id)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckView)
