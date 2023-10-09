import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateEvent from '../../screens/host/CreateEvent'
import Venue from '../../screens/host/Venue'
import VenueDetails from '../../screens/host/VenueDetails'
import HallDetails from '../../screens/host/HallDetails'
import VenueAvailabillity from '../../screens/host/VenueAvailabillity'
import VenueEnquiry from '../../screens/host/VenueEnquiry'


const Stack = createNativeStackNavigator()

const Hostnavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='/createevent' component={CreateEvent} />
        <Stack.Screen name='/venue' component={Venue} />
        <Stack.Screen name='/venueDetails' component={VenueDetails} />
        <Stack.Screen name='/hallDetails' component={HallDetails} />
        <Stack.Screen name='/venueAvailability' component={VenueAvailabillity} />
        <Stack.Screen name='/venueEnquiry' component={VenueEnquiry} />
   </Stack.Navigator>
  )
}

export default Hostnavigation