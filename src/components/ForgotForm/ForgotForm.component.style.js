import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240,240,240, 0.6)",
    minHeight: 350,
    height: "45%",
    width: "80%",
    borderRadius: 25,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgb(216,216,216)",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginBottom: 18,
    borderRadius: 7,
  },
  input: {
    backgroundColor: "rgb(229,229,229)",
    height: 40,
    width: "88%",
    marginLeft: "auto",
    paddingLeft: 5,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  buttonText: {
    padding: 5,
    backgroundColor: "rgb(107,82,163)",
    width: "60%",
    borderRadius: 3,
    marginBottom: 5,
    paddingLeft: 5,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
  },
  text: {
    textAlign: "center",
    color: "rgb(107,82,163)",
  },
  error: {
    textAlign: "center",
    color: "rgb(240,0,0)",
    maxHeight: 20,
  },
  hr: {
    backgroundColor: "rgb(198,135,213)",
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    height: 10,
  },
});
