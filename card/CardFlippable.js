import React from 'react';
import PropTypes from 'prop-types';
import FlipCard from 'react-native-flip-card';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

import { black, gray, lightgray } from '../utils/colors';

const CardFlippable = (props) => {
  const { height, width } = Dimensions.get('window');

  return (
    <FlipCard
      flipHorizontal
      flipVertical={false}
      perspective={1000}
      style={{ width: width * 0.88, height: height * 0.2, borderWidth: 0 }}
    >
      {/* Face Side */}
      <View style={[styles.cardContainer, { backgroundColor: gray }]}>
        <Text style={styles.cardMainText}>{props.card.question}</Text>
        <Text style={styles.cardSecondaryText}>QUESTION</Text>
      </View>
      {/* Back Side */}
      <View style={[styles.cardContainer, { backgroundColor: lightgray }]}>
        <Text style={styles.cardMainText}>{props.card.answer}</Text>
        <Text style={styles.cardSecondaryText}>ANSWER</Text>
      </View>
    </FlipCard>
  );
};

CardFlippable.propTypes = {
  card: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginVertical: 30,
    paddingVertical: 20,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: black,
    borderRadius: 20
  },
  cardMainText: {
    fontSize: 18,
    paddingHorizontal: 15
  },
  cardSecondaryText: {
    fontSize: 20,
    opacity: 0.3
  }
});

export default CardFlippable;
