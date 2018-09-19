import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#FFF",
    maxWidth: 350,
    marginHorizontal: 30,
    borderColor: "#FFF",
    borderRadius: 5
  },
  content: {
    justifyContent: "center",
    padding: 20
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    lineHeight: 25
  },
  buttonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    flexWrap: "wrap"
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 5,
    minWidth: 90
  },
  textButton: {
    fontSize: 15,
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default styles;
