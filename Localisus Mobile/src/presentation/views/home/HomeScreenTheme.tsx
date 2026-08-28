import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/AppTheme";

export const styles = StyleSheet.create({
  visualizacaoTela: {
    zIndex: 50,
    flex: 1,
    marginTop: -25,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#EBF9FF'
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
  botoesRodapeHome: {
    zIndex: 2500,
    alignContent: 'center',
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});
