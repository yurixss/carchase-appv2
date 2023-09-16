import { Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// Dimensions
export const screenWidth = Dimensions.get('screen')?.width;
export const screenHeight = Dimensions.get('screen')?.height;
export const windowWidth = Dimensions.get('window')?.width;
export const windowHeight = Dimensions.get('window')?.height;

// Platform
export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const screenPadding = RFValue(32, screenHeight);
