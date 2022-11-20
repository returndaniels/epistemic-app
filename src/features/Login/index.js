import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.component.style";

function Login({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.email & user.username & user.name) navigation.navigate("Home");
  }, []);

  return (
    <LinearGradient
      colors={["rgb(120,70,179)", "rgb(168,70,172)"]}
      style={styles.container}
    >
      <LoginForm navigation={navigation} onLoading={setLoading} />
      <Pressable
        style={styles.termsBtn}
        onPress={() => navigation.navigate("Terms")}
      >
        <Text style={styles.terms}>Termos de uso</Text>
      </Pressable>
      {isLoading && (
        <View style={styles.loadingConteiner}>
          <Image
            style={styles.loading}
            source={require("../../../assets/loading.gif")}
          />
        </View>
      )}
    </LinearGradient>
  );
}

export default Login;
