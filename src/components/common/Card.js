import React from 'react';
import {
  View, Text
} from 'react-native';

const Card = () => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text>This is Card to render some images</Text>
    </View>
  );
};


const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
