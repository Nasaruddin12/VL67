import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, Appearance, useColorScheme, } from 'react-native'
import { get, save } from './src/utils/Storage';
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from './rudex/Actions/Functions';
import MainNavigater from './src/navigation';
export default function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.theme)
  useEffect(() => {
    dispatch(changeTheme(Appearance.getColorScheme()));
    Appearance.addChangeListener(onThemeChange);

    return () => Appearance.removeChangeListener(onThemeChange);
  }, []);

  const onThemeChange = ({ colorScheme }) => {
    console.log("onThemeChange", colorScheme)
    dispatch(changeTheme(colorScheme));
  }
  return (
    <View style={{flex: 1}}>
      <MainNavigater />
    </View>
  )
}