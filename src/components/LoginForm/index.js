import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import styles from "./LoginForm.component.style";
import useLoginForm from "./useLoginForm";

function LoginForm({ navigation, onLoading }) {
  const {
    email,
    password,
    error,
    onChangeEmail,
    onBlurEmail,
    onChangePassword,
    onSubmit,
  } = useLoginForm(navigation, onLoading);

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
          onEndEditing={onBlurEmail}
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
      <Pressable style={styles.buttonText} onPress={onSubmit}>
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
