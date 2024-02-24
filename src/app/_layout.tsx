import { Slot } from "expo-router";
import { StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useFonts, IrishGrover_400Regular } from '@expo-google-fonts/irish-grover'
import * as SplashScreen from 'expo-splash-screen'
import { useState } from "react";
import { theme } from "../theme";

SplashScreen.preventAutoHideAsync()

export default function Layout() {
    const [orientationIsLandscape, setOrientation] = useState(true);
    const [fontsLoaded] = useFonts({
        IrishGrover_400Regular
    });

    if (!fontsLoaded) {
        SplashScreen.hideAsync()
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <StatusBar barStyle="light-content" />
            {fontsLoaded && <Slot />}
 
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:theme.colors.brown[950],
        paddingBottom:10
    }
})