import React from 'react';
import { View, Text } from 'react-native';

function App(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: "30"
        }}
      >
        I love React Native ❤️! This is my first React Native App. Here is so more text
      </Text>
    </View>
  );
}

export default App;