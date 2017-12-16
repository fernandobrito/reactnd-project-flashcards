import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import TextButton from '../ui/TextButton';
import Header from "../ui/Header";
import { addDeck, getMostRecentDeck } from "./reducer";
import globalStyles from '../ui/styles';

class DeckAdd extends React.Component {
  state = { form: { title: null } };

  _submit() {
    const { title } = this.state.form;
    this.props.addDeck({ title });

    const navigate = NavigationActions.navigate({ routeName: 'DeckView', params: { deckId: null }});
    this.props.navigation.dispatch(navigate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>New Deck</Header>

        <View style={styles.content}>
          <Text style={styles.inputLabel}>What is the title of your deck?</Text>

          <TextInput
            style={styles.textInput}
            editable={true}
            maxLength={40}
            onChangeText={(text) => this.setState({ form: { title: text }})}
            placeholder="Write your title here..."
            value={this.state.form.title} />

          <TextButton onPress={() => this._submit()}>
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
  }
});

const mapStateToProps = (state) => ({
  mostRecentDeck: getMostRecentDeck(state)
});

const mapDispatchToProps = {
  addDeck: addDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckAdd);
