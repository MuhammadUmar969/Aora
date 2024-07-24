import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Aora</Text>
            <Text>Hello World</Text>
            <StatusBar style="auto" />   
            <Link href="/tabs/profile" style={{ color: 'blue' }}>Go to Profile</Link>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})