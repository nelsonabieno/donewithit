import React from 'react';
import { View, Text } from 'react-native';

import AppText from './app/components/AppText';

function App(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <AppText> I love React Native!</AppText>
    </View>
  );
}

export default App;