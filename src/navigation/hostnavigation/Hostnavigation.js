import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateEvent from '../../screens/host/CreateEvent'
import Venue from '../../screens/host/Venue'


const Stack = createNativeStackNavigator()

const Hostnavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='/createevent' component={CreateEvent} />
        <Stack.Screen name='/venue' component={Venue} />
   </Stack.Navigator>
  )
}

export default Hostnavigation