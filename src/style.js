import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#FFF",
    maxWidth: 350,
    marginHorizontal: 30,
    borderRadius: 5
  },
  content: {
    justifyContent: "center",
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    lineHeight: 25
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    flexWrap: "wrap"
  },
  button: {
    backgroundColor: "#00ACEF",
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 5,
    minWidth: 90
  },
  buttonLeft: {
    backgroundColor: "#F53D3D"
  },
  textButton: {
    fontSize: 15,
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default styles;
