import React from "react";
import { View } from "react-native";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/screens/Screen";
import Icon from "./app/components/Icon";

function App(props) {
  return (
    <Screen>
      <Icon name="email" size={100} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}

export default App;
