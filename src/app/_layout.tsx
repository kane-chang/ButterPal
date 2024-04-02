import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Image, Text } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require('../../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
    Inter100: require('../../assets/fonts/Inter-Thin.ttf'),
    Inter200: require('../../assets/fonts/Inter-ExtraLight.ttf'),
    Inter300: require('../../assets/fonts/Inter-Light.ttf'),
    Inter400: require('../../assets/fonts/Inter-Regular.ttf'),
    Inter500: require('../../assets/fonts/Inter-Medium.ttf'),
    Inter600: require('../../assets/fonts/Inter-SemiBold.ttf'),
    Inter700: require('../../assets/fonts/Inter-Bold.ttf'),
    Inter800: require('../../assets/fonts/Inter-ExtraBold.ttf'),
    Inter900: require('../../assets/fonts/Inter-Black.ttf'),
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{headerLeft: props => <Image source={require('../../assets/images/toastLogo.png')} style={{marginLeft:10}}/>}} />
        <Stack.Screen name="(auth)/login" options={{headerLeft: props => <Image source={require('../../assets/images/toastLogo.png')} style={{marginLeft:10}}/>}} />
        <Stack.Screen name="(auth)/(signup)/signup" options={{headerLeft: props => <Image source={require('../../assets/images/toastLogo.png')} style={{marginLeft:10}}/>}} />
        <Stack.Screen name="(auth)/(signup)/createProfile" options={{headerLeft: props => <Image source={require('../../assets/images/toastLogo.png')} style={{marginLeft:10}}/>}} />
        <Stack.Screen name="(auth)/(signup)/createProfile2" options={{headerLeft: props => <Image source={require('../../assets/images/toastLogo.png')} style={{marginLeft:10}}/>}} />
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        {/* <Stack.Screen name='(tabs)' options={{headerRight: props => <><Ionicons name="filter" size={24}/><Text style={{marginLeft:6, fontFamily:'Inter'}}>Sort</Text></>, headerLeft: props => <Image source={require('../../assets/images/toastLogo.png')} style={{marginLeft:10}}/>}}/> */}
      </Stack>
  );
}
