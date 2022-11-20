import { useEffect } from "react";
import storage from "../../utils/localstorege";

async function RequireAuth(navigation) {
  useEffect(() => {
    const user = storage.load({
      key: "userData",
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        someFlag: true,
      },
    });

    if (!user) navigation.navigate("Login");
  }, []);
}

export default RequireAuth;
