import { StyleSheet } from "react-native";
import {COLORS} from '../../../../presentation/theme/AppTheme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkBlue,
  },

  header: {
    backgroundColor: COLORS.darkBlue,
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  circleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  searchContainer: {
    marginTop: 15,
    backgroundColor: "#DCE7EC",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  searchInput: {
    flex: 1,
    height: 45,
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: "600",
  },

  searchIcon: {
    fontSize: 24,
    color: "#4B4B6A",
  },

  backIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  mapArea: {
    backgroundColor: "#bdbdbdff",
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    color: "#666",
    fontSize: 18,
  },

  footer: {
    backgroundColor: COLORS.darkBlue,
    padding: 15,
    gap: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  remediosButton: {
    width: "48%",
    backgroundColor: COLORS.coralRed,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  localizacaoButton: {
    width: "48%",
    backgroundColor: COLORS.mintGreen,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  lembretesButton: {
    width: "48%",
    backgroundColor: COLORS.goldenYellow,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  ajudaButton: {
    width: "48%",
    backgroundColor: "#E8F0FF",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  helpIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 8,
  },
});
