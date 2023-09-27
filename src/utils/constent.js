import { Dimensions, Platform } from "react-native";

export const Top = Platform.OS == 'ios' ? 40 : 0

export const { width, height } = Dimensions.get('window')