import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'

class CardAdd extends React.Component {
  state = { form: { title } };

  submit() {
    const { title } = this.state.form;
    Alert.alert('title', title);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>

        <Text>What is the title of your deck?</Text>

        <TextInput
          editable = {true}
          maxLength = {40}
          onChangeText={(text) => this.setState({ form: { title: text }})}
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

export default CardAdd;
