import *as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Home, NewsDetail } from '../../containers/pages/Homes';
import { Login, Register, ForgotPw, SplashScreen, NavTobTab } from '../../containers/pages/Registrasions'
import { Account, NotAccount, SettingAccount, SettingProfile, Pembeda, PesananSaya } from '../../containers/pages/Accounts';
import { Order, barOrder } from '../../containers/pages/Orders'
import { Notivikasi, barNotiv } from '../../containers/pages/Notifications'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TOB from './Tobtab';


// Stack Navigatior
const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="SplashScreeen" component={SplashScreen}/>
        <Stack.Screen name="Home" component={Buttom} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Notivikasi" component={Notivikasi} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="NewsDetail" component={NewsDetail}/>
        <Stack.Screen name="NotAccount" component={NotAccount} />
        <Stack.Screen name="ForgotPw" component={ForgotPw} />
        <Stack.Screen name="SettingAccount" component={SettingAccount} />
        <Stack.Screen name="SettingProfile" component={SettingProfile} />
        <Stack.Screen name="PesananSaya" component={PesananSaya} />
        <Stack.Screen name="TOB" component={TOB} />
        <Stack.Screen name="NavTopTab" component={NavTobTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

// Bottom Tab
const Tab = createBottomTabNavigator();

function Buttom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      component={Home} />
      <Tab.Screen name="Order" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shopping" color={color} size={size} />
        ),
      }}
      component={Order} />
      <Tab.Screen name="Notification"
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="email" color={color} size={size} />
        ),
      }}
      component={Notivikasi} />
      <Tab.Screen name="Account" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={size} />
        ),
      }}
      component={Pembeda} />
    </Tab.Navigator>
  );
}



