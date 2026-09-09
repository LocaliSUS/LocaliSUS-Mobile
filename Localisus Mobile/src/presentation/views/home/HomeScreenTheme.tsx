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
    top: 10,
    color: '#151633ff'
  },
  txtDescricao: {
    flex: 1,
  },
  unidadesProximasCard: {
    marginBottom: "7.5%",
    width: "100%",
    zIndex: 3,
    flex: 1,
    alignContent: 'space-between',
    flexDirection: 'row'
  },
  botoesRodapeHome: {
    alignContent: 'center',
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardsImagemHospital: {
    flex: 1,
  }
});
