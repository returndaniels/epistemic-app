import { useState } from "react";
import { forgot } from "../../services/user";
import { validateEmail } from "../../utils/validate";

function useForgotForm(emailDefault, onLoading, onSucess) {
  const [email, onChangeEmail] = useState(emailDefault ?? null);
  const [error, onChangeError] = useState(null);

  const onSucessForgot = (data) => {
    onLoading(false);
    onChangeError(null);
    onChangeEmail(null);
    onSucess(data);
  };

  const onFailedForgot = (err) => {
    onLoading(false);
    onChangeError(err ? err.message : "Não foi possível localizar o usuário");
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

    if (!email) {
      onChangeError("Informe email e senha");
      return;
    }
    onLoading(true);
    forgot({ email }, onSucessForgot, onFailedForgot);
  };

  return {
    email,
    error,
    onChangeEmail,
    onBlurEmail,
    onSubmit,
  };
}

export default useForgotForm;
