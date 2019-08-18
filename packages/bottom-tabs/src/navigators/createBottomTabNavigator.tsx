import * as React from 'react';
import {
  useNavigationBuilder,
  createNavigator,
  DefaultNavigatorOptions,
} from '@navigation-ex/core';
import {
  TabRouter,
  TabRouterOptions,
  TabNavigationState,
} from '@navigation-ex/routers';
import BottomTabView from '../views/BottomTabView';
import {
  BottomTabNavigationConfig,
  BottomTabNavigationOptions,
} from '../types';

type Props = DefaultNavigatorOptions<BottomTabNavigationOptions> &
  TabRouterOptions &
  BottomTabNavigationConfig;

function BottomTabNavigator({
  initialRouteName,
  backBehavior,
  children,
  screenOptions,
  ...rest
}: Props) {
  const { state, descriptors, navigation } = useNavigationBuilder<
    TabNavigationState,
    BottomTabNavigationOptions,
    TabRouterOptions
  >(TabRouter, {
    initialRouteName,
    backBehavior,
    children,
    screenOptions,
  });

  return (
    <BottomTabView
      {...rest}
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
  );
}

export default createNavigator<
  BottomTabNavigationOptions,
  typeof BottomTabNavigator
>(BottomTabNavigator);
