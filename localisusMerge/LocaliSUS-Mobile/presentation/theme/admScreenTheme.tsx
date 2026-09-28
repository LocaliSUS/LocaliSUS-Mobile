import { COLORS } from "./AppTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  centro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.darkBlue,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  erro: {
    color: "#FF6B6B",
    marginBottom: 10,
  },
  sucesso: {
    color: "#2E8B57",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: COLORS.lightBlue,
    padding: 14,
    borderRadius: 22,
    alignItems: "center",
  },
  botaoTexto: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
});
