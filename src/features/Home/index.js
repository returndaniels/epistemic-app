import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.email || !user.username || !user.name)
      navigation.navigate("Login");
  }, [user]);

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
