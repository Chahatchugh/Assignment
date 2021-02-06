import "react-native-gesture-handler";
import React from 'react';
import {Provider} from "react-redux";
import store  from "./src/redux/store";
import RootNavigator from "./src/navigation/index";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
