import { MD5 } from "react-native-crypto-js";
import { signInUser } from "../api/auth";
import storage from "../utils/localstorege";

const signIn = async (
  { email, password },
  onSucess = () => null,
  errorCallback = () => null
) => {
  const hash = MD5(password).toString();

  try {
    const data = await signInUser({ email, password: hash });
    if (!data || data?.success === false) {
      errorCallback(data?.message);
      return;
    }

    storage.save({
      key: "userData", // Note: Do not use underscore("_") in key!
      data: data.user,
      expires: 1000 * 3600,
    });
    onSucess();
  } catch (error) {
    errorCallback(error);
  }
};

export { signIn };
