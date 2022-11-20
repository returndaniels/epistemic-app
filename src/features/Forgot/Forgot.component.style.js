import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  termsBtn: {
    position: "absolute",
    color: "#fff",
    bottom: 5,
  },
  loadingConteiner: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(7,7,7,0.3)",
    width: "100%",
    height: "100%",
  },
  loading: {
    width: 180,
    height: 180,
  },
  terms: {
    color: "#fff",
  },
  verifiedContainer: {
    position: "absolute",
    backgroundColor: "rgba(7,7,7,0.3)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedContent: {
    padding: 20,
    backgroundColor: "rgba(240,240,240, 1)",
    borderRadius: 25,
    width: "70%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedText: {
    color: "rgba(3,3,3,0.6)",
    fontSize: 14,
    marginTop: 15,
  },
  buttonText: {
    padding: 5,
    backgroundColor: "rgb(107,82,163)",
    width: "60%",
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 5,
    paddingLeft: 5,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
  },
});
