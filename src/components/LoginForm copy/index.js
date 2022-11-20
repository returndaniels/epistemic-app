import { useState } from "react";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { signIn } from "../../services/user";
import styles from "./LoginForm.component.style";

function LoginForm({ navigation, onLoading }) {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [error, onChangeError] = useState(null);

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      onChangeEmail(text);
      return false;
    } else onChangeEmail(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/epistemic-logo.png")}
      />
      <View style={styles.inputContainer}>
        <Octicons
          style={{ marginLeft: 7 }}
          name="person"
          size={20}
          color="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={validateEmail}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather style={{ marginLeft: 5 }} name="lock" size={20} color="#999" />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <Pressable
        style={styles.buttonText}
        onPress={() => {
          if (!email || !password) {
            onChangeError("Informe email e senha");
            return;
          }
          onLoading(true);
          signIn(
            { email, password },
            () => {
              onLoading(false);
              navigation.navigate("Home");
            },
            (err) => {
              onLoading(false);
              onChangeError(err ? err.message : "Falha na autenticação");
              onChangePassword("");
            }
          );
        }}
      >
        <Text style={styles.btnText}>ENTRAR</Text>
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
      <Pressable onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.text}>Esqueceu sua senha? Clique Aqui</Text>
      </Pressable>
      <View style={styles.hr} />
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text}>Não tem um conta? Cadastre-se</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default LoginForm;