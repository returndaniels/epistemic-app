import { useState } from "react";
import { register } from "../../services/user";
import { validateEmail } from "../../utils/validate";

function useRegistarForm(navigation, onLoading) {
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

  const onBlurEmail = () => {
    if (!validateEmail(email)) {
      onChangeError("Insira um endereço de email válido");
      return false;
    } else onChangeError(null);
    return true;
  };

  const onSubmit = () => {
    if (!onBlurEmail()) {
      return;
    }
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
  };

  return {
    username,
    name,
    email,
    password,
    error,
    onChangeUsername,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeError,
    onBlurEmail,
    onSubmit,
  };
}

export default useRegistarForm;
