import { Dimensions, Platform } from "react-native";

export const Top = Platform.OS == 'ios' ? 40 : 0

export const { width, height } = Dimensions.get('window')

export const GRAY_COLOR = '#c7ccd1'
export const BGTRASPARENT ='rgba(52, 52, 52, 0.8)'