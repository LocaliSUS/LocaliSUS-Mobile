import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/AppTheme";

export const styles = StyleSheet.create({
 
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
    marginTop: "7.5%",
    width: "100%",
    zIndex: 3,
    flex: 1,
    alignContent: 'space-between',
    flexDirection: 'row'
  },
  cardsImagemHospital: {
    flex: 1,
  }
});
