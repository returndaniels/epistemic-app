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
import { register } from "../../services/user";
import styles from "./RegisterForm.component.style";
import { validateEmail } from "../../utils/validate";

function RegisterForm({ navigation, onLoading }) {
  const [username, onChangeUsername] = useState(null);
  const [name, onChangeName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [error, onChangeError] = useState(null);

  const onSucessRegister = () => {
    onLoading(false);
    navigation.navigate("Login");
  };
  const onFailedRegister = (err) => {
    onLoading(false);
    onChangeError(err ? err.message : "Falha ao criar conta");
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
          placeholder="Nome e sobrenome"
          onChangeText={onChangeName}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Octicons
          style={{ marginLeft: 7 }}
          name="person"
          size={20}
          color="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          onChangeText={onChangeUsername}
          value={username}
        />
      </View>
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
            if (!validateEmail(email))
              onChangeError("Insira um endereço de email válido");
            else onChangeError(null);
          }}
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
          if (!name || !username || !email || !password) {
            onChangeError("Preencha todos os campos");
            return;
          }
          onLoading(true);
          register(
            { name, username, email, password },
            onSucessRegister,
            onFailedRegister
          );
        }}
      >
        <Text style={styles.btnText}>CADASTRAR</Text>
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.hr} />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text}>Já possui conta? Clique Aqui</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default RegisterForm;
