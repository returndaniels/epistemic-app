import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Moment from "../../components/Moment";
import styles from "./Home.component.style";

export default function Home({ navigation }) {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.email || !user.username || !user.name)
      navigation.navigate("Login");
  }, [user]);

  return (
    <LinearGradient colors={["#6e6cd7", "#6d92d8"]} style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/epistemic-logo-light.png")}
      />
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/avatar.png")}
        />
        <Text style={styles.userText}>Olá, {user.name}</Text>
        <Moment />
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
