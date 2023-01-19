import {PerformanceMeasureView} from '@shopify/react-native-performance';
import React from 'react';
import styles from '../../Styles/GenericStyles';
import {View, Text} from 'react-native';

export const MessagesScreen = () => (
  <PerformanceMeasureView interactive screenName="MessagesScreen">
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  </PerformanceMeasureView>
);
