import React, {useCallback, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  RenderPassReport,
  PerformanceProfiler,
  LogLevel,
  useProfilerState,
} from '@shopify/react-native-performance';

/*
  Uncomment the import and code to run each test. Be sure to comment the other test/imports before restarting the app.

  1. Tests the app startup time, since homescreen is rendered first we wrap that in a PerformanceMeasureView
  2. Tests the message screen presentation time, this is presented via a button tap on the HomeScreen. We use the useStartProfiler hook for this.
  3. TBC - Can test loading state -> loaded state times
*/

import {HomeScreen as HomeScreenAppStartupTest} from './Components/HomeScreen/HomeScreenTestingAppStartRender';
import {MessagesScreen as MessagesScreenNoTests} from './Components/MessagesScreen/MessagesScreenNoTests';

// import {HomeScreen as HomeScreenTestingMessages} from './Components/HomeScreen/HomeScreenTestingMessagesRender';
// import {MessagesScreen as MessagesScreenTestingRender} from './Components/MessagesScreen/MessagesScreenTestingRenderTime';

const Stack = createNativeStackNavigator();

// Toggle to disable performance logging completely.
const isEnabled = false;

const App = () => {
  const state = useProfilerState({});

  const onReportPrepared = useCallback(
    (report: RenderPassReport) => console.log(report),
    [],
  );

  useEffect(() => {
    // Log's additional profiler state to the console.
    console.log('State:', JSON.stringify(state));
  }, [state]);

  const errorHandler = useCallback((error: Error) => {
    console.log(`Error: ${error}`);
  }, []);

  return (
    <PerformanceProfiler
      logLevel={LogLevel.Debug}
      onReportPrepared={onReportPrepared}
      useRenderTimeouts
      errorHandler={errorHandler}
      enabled={isEnabled}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Test 1 */}
          <Stack.Screen name="Home" component={HomeScreenAppStartupTest} />
          <Stack.Screen name="Messages" component={MessagesScreenNoTests} />
          {/* Test 2 */}
          {/* <Stack.Screen name="Home" component={HomeScreenTestingMessages} />
          <Stack.Screen
            name="Messages"
            component={MessagesScreenTestingRender}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PerformanceProfiler>
  );
};

export default App;
