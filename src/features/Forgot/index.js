import { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ForgotForm from "../../components/ForgotForm";
import styles from "./Forgot.component.style";

function Forgot({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [sucess, onSucess] = useState(null);
  const { email } = useSelector((state) => state.user);

  return (
    <LinearGradient
      colors={["rgb(120,70,179)", "rgb(168,70,172)"]}
      style={styles.container}
    >
      <ForgotForm
        emailDefault={email}
        navigation={navigation}
        onLoading={setLoading}
        onSucess={onSucess}
      />
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

      {sucess && (
        <View style={styles.verifiedContainer}>
          <View style={styles.verifiedContent}>
            <MaterialIcons name="verified" size={40} color="#393" />
            <Text style={styles.verifiedText}>{sucess.message}</Text>
            <Pressable
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.btnText}>ok!</Text>
            </Pressable>
          </View>
        </View>
      )}
    </LinearGradient>
  );
}

export default Forgot;
