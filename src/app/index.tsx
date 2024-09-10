import { View, Image } from 'react-native';
import { Input } from "@/components/input";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { Link } from 'expo-router'
import { Button } from "@/components/button";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-green-500 px-4">

        <Image source={require('@/assets/logo.png')}className="h-16 mb-8" resizeMode='contain'/>
            
        <View className="w-full p-3 mx-5 rounded-xl gap-2 mb-4">
            <Input variant="primary">
                <MaterialCommunityIcons className= "mx-2" name="ticket-confirmation-outline"size={20} color={colors.green[200]}/>
                <Input.Field placeholder='Código do Ingresso'/>
            </Input>

            <Button title="ACESSAR CREDENCIAL" className="w-full h-14 bg-orange-500 border rounded-lg flex-row items-center gap-2"/>
        </View>

        <Link className='text-white font-bold'href='/register'>Ainda nao possui ingresso?</Link>
        </View>
    )
}