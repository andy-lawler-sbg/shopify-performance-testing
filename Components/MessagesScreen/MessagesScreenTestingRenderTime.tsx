import React from 'react';
import styles from '../../Styles/GenericStyles';
import {View, Text} from 'react-native';

import {withPerformance} from '../PerformanceWrappers/PerformanceWrapper';

const MessagesScreen = () => (
  <View style={styles.container}>
    <Text>Messages Screen</Text>
  </View>
);

export default withPerformance(MessagesScreen, {screenName: 'Messages'});
