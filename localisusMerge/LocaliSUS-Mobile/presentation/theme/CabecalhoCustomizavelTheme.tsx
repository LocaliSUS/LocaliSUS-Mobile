import { COLORS } from "./AppTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: "100%",
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  headerTitle: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 20,
    top: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
