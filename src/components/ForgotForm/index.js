import { useState } from "react";
import Octicons from "react-native-vector-icons/Octicons";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { forgot } from "../../services/user";
import styles from "./ForgotForm.component.style";
import { validateEmail } from "../../utils/validate";

function ForgotForm({ navigation, onLoading }) {
  const [email, onChangeEmail] = useState(null);
  const [error, onChangeError] = useState(null);

  const onSucessForgot = (data) => {
    onLoading(false);
    onChangeError(null);
    signInSucceeded(data.user);
    navigation.navigate("Home");
  };

  const onFailedForgot = (err) => {
    onLoading(false);
    onChangeError(err ? err.message : "Falha na autenticação");
    onChangePassword("");
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
          onChangeText={onChangeEmail}
          onEndEditing={() => {
            if (!validateEmail(email)) {
              onChangeError("Insira um endereço de email válido");
            } else onChangeError(null);
          }}
          value={email}
        />
      </View>
      <Pressable
        style={styles.buttonText}
        onPress={() => {
          if (!email) {
            onChangeError("Informe email e senha");
            return;
          }
          onLoading(true);
          forgot({ email }, onSucessForgot, onFailedForgot);
        }}
      >
        <Text style={styles.btnText}>Recuperar senha</Text>
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text}>Voltar ao Login? Clique Aqui</Text>
      </Pressable>
      <View style={styles.hr} />
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text}>Não tem um conta? Cadastre-se</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default ForgotForm;
