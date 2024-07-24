import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import tw from 'tailwind-react-native-classnames';

export default function App() {
    return (
        <View style={tw`flex-1 items-center justify-center bg-white`}>
            <Text style={tw`text-3xl`}>Aora</Text>
            <Text>Hello World</Text>
            <StatusBar style="auto" />
            <Link href="/tabs/profile" style={{ color: 'blue' }}>Go to Profile</Link>
        </View>
    )
}
