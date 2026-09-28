import { StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "./AppTheme"; // Ajuste o caminho se necessário

const baseButtonStyles: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  height: 50,
  marginHorizontal: 4,
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  borderRadius: 25,
  boxShadow: "1.25px 3.5px 0px 2px #201533",
};

export const layoutStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightBlue },
  tabContainer: { flex: 1 },
  hiddenTabList: { display: "none" },
  gridContainer: {
    position: "absolute",
    bottom: 0,
    width: "101%",
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: COLORS.darkBlue,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  buttonMedicamento: {
    ...baseButtonStyles,
    backgroundColor: COLORS.coralRedLight,
  },
  buttonMapaSus: {
    ...baseButtonStyles,
    backgroundColor: COLORS.mintGreenLight,
  },
  buttonLembretes: {
    ...baseButtonStyles,
    backgroundColor: COLORS.goldenYellowLight,
  },
  buttonAjuda: { ...baseButtonStyles, backgroundColor: COLORS.lightBlue },
  buttonIcon: { marginRight: 6 },
  buttonText: { fontSize: 20, fontWeight: "600", color: COLORS.deepPurple },
});
