import { StyleSheet } from "react-native";
import { COLORS } from "@/presentation/theme/AppTheme";

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F0FA",
    width: 350,
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 45,
    boxShadow: "0px 3.5px 0px 0px #201533",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.deepPurple,
    fontWeight: "500",
  },
});
