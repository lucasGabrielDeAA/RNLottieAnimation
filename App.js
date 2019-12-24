import React from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

import travel from './travel.json';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie autoSize autoPlay loop resizeMode="contain" source={travel} />
    </View>
  );
}
