import React from 'react';
import {PerformanceMeasureView} from '@shopify/react-native-performance';

type PerformanceProps = {
  interactive?: boolean;
  screenName: string;
};

export function withPerformance<T extends object>(
  Component: React.ComponentType<T>,
  performanceProps: PerformanceProps,
) {
  const {interactive = false, screenName} = performanceProps ?? {};
  return (props: T) => (
    <PerformanceMeasureView interactive={interactive} screenName={screenName}>
      <Component {...props} />
    </PerformanceMeasureView>
  );
}
