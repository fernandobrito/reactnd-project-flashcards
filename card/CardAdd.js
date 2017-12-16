import React from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import TextButton from '../ui/TextButton';
import Header from '../ui/Header';
import globalStyles from '../ui/styles';
import { addCardToDeck, getMostRecentDeck } from '../deck/reducer';

class CardAdd extends React.Component {
  static navigationOptions = {
    title: 'Add Card'
  };

  state = { form: { question: 'Question', answer: 'Answer' } };

  submit() {
    const { deck } = this.props.navigation.state.params;

    const card = this.state.form;
    this.props.addCardToDeck(deck.id, card);

    // const navigate = NavigationActions.navigate({ routeName: 'DeckView', params: { deckId: deck.id }});
    const navigate = NavigationActions.back();
    this.props.navigation.dispatch(navigate);
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Header>Deck: {deck.title}</Header>

        <View style={styles.content}>
          <Text style={styles.inputLabel}>Question:</Text>

          <TextInput
            style={styles.textInput}
            editable={true}
            maxLength={40}
            onChangeText={(text) => this.setState({ form: { question: text }})}
            value={this.state.form.question} />

          <Text style={styles.inputLabel}>Answer:</Text>

          <TextInput
            style={styles.textInput}
            editable={true}
            maxLength={40}
            onChangeText={(text) => this.setState({ form: { answer: text }})}
            value={this.state.form.answer} />

          <TextButton onPress={() => this.submit()}>
            Submit
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  }, content: {
    marginVertical: 20
  }, inputLabel: {
    fontSize: 25
  }, textInput: {
    fontSize: 20,
    marginVertical: 20
  }
});

const mapStateToProps = (state) => ({
  mostRecentDeck: getMostRecentDeck(state)
});

const mapDispatchToProps = {
  addCardToDeck: addCardToDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(CardAdd);