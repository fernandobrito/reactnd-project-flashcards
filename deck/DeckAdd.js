import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { connect } from "react-redux";

import TextButton from '../ui/TextButton';
import Header from "../ui/Header";
import { purple, white } from "../utils/colors";
import { addDeck } from "./reducer";

class DeckAdd extends React.Component {
  state = { form: { title: 'Write your title here' } };

  submit() {
    const { title } = this.state.form;
    Alert.alert('title', title);
    this.props.addDeck({ title });
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
            value={this.state.form.title} />

          <TextButton style={styles.submitButton} onPress={() => this.submit()}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }, submitButton: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }, submitButtonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
});

const mapDispatchToProps = {
  addDeck: addDeck
};

export default connect(null, mapDispatchToProps)(DeckAdd);
