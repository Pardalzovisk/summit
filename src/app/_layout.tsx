import { Slot } from "expo-router";
import { View, StatusBar} from 'react-native'
import { Loading } from "@/components/loading";
import '@/styles/global.css'
import {useFonts, Roboto_700Bold,    Roboto_500Medium,   Roboto_400Regular    } from '@expo-google-fonts/roboto'
export default function Layout(){

    const [fontsLoaded] = useFonts({
        Roboto_700Bold,    Roboto_500Medium,   Roboto_400Regular
    })

    if (!fontsLoaded){
        return <Loading/>
    }

    return(
    <View className="flex-1 bg-green-500 text-orange-500">
        <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
        />
        <Slot/>
    </View>) 
}