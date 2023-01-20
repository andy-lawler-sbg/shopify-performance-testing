import React from 'react';
import {useStartProfiler} from '@shopify/react-native-performance';
import {Text, View, Button} from 'react-native';
import styles from '../../Styles/GenericStyles';

/*
  This approach tests the render time of the messages screen by using the `useStartProfiler()` hook.
  We then have to use the `PerformanceMeasureView` within the MessagesScreen.
*/

/** Todo: find a way to segment the useStartProfiler and onPress logic into a new hook */

export const HomeScreen = (props: {navigation: any}) => {
  const startNavigationTTITimer = useStartProfiler();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Messages"
        onPress={uiEvent => {
          startNavigationTTITimer({
            source: 'Home',
            uiEvent,
          });
          props.navigation.navigate('Messages');
        }}
      />
    </View>
  );
};
