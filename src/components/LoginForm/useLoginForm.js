import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../services/user";
import { validateEmail } from "../../utils/validate";
import {
  setUserEmailSucceeded,
  signInSucceeded,
} from "../../state/actions/user.actions";

function LoginForm(navigation, onLoading) {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [error, onChangeError] = useState(null);

  const onSucessLogin = (data) => {
    onLoading(false);
    onChangeError(null);
    dispatch(signInSucceeded(data.user));
    navigation.navigate("Home");
  };

  const onFailedLogin = (err) => {
    onLoading(false);
    onChangeError(err ? err.message : "Falha na autenticação");
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
    if (!email || !password) {
      onChangeError("Informe email e senha");
      return;
    }
    onLoading(true);
    signIn({ email, password }, onSucessLogin, onFailedLogin);
  };

  return {
    email,
    password,
    error,
    onChangeEmail,
    onBlurEmail,
    onChangePassword,
    onSubmit,
  };
}

export default LoginForm;
