import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import useForgotForm from "./useForgotForm";
import styles from "./ForgotForm.component.style";

function ForgotForm({ navigation, emailDefault, onLoading, onSucess }) {
  const { email, error, onChangeEmail, onBlurEmail, onSubmit } = useForgotForm(
    emailDefault,
    onLoading,
    onSucess
  );

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
      <Pressable style={styles.buttonText} onPress={onSubmit}>
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
