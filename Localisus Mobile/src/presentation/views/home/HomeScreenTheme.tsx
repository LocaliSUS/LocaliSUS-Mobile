import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  visualizacaoTela: {
    flex: 1,
    zIndex: 1,
    top: -20,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "column",
    alignItems: "center",
  },
  txtTelaHome: {
    fontSize: 25,
    fontWeight: "bold",
    left: 0,
  },
  txtDescricao: {
    flex: 1,
  },
  unidadesProximasCard: {
    marginTop: 10,
  },
  background: {
    backgroundColor: "red",
  }
});
