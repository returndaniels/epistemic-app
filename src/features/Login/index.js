import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.component.style";

function Login({ navigation }) {
  return (
    <LinearGradient
      colors={["rgb(120,70,179)", "rgb(168,70,172)"]}
      style={styles.container}
    >
      <LoginForm navigation={navigation} />
      <Pressable
        style={styles.termsBtn}
        onPress={() => navigation.navigate("Terms")}
      >
        <Text style={styles.terms}>Termos de uso</Text>
      </Pressable>
    </LinearGradient>
  );
}

export default Login;
