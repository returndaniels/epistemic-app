import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import useRequireAuth from "../../components/RequireAuth";

export default function Home({ navigation }) {
  useRequireAuth(navigation);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
