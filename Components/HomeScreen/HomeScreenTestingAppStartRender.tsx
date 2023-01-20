import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../../Styles/GenericStyles';

import {withPerformance} from '../PerformanceWrappers/PerformanceWrapper';

/*
  This approach tests the render time upon app startup. Since the home screen is the first screen shown, 
  a report will be created showing the app first render time.
*/

export const HomeScreen = (props: {navigation: any}) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Messages"
      onPress={() => props.navigation.navigate('Messages')}
    />
  </View>
);

export default withPerformance(HomeScreen, {
  interactive: true,
  screenName: 'Home',
});
