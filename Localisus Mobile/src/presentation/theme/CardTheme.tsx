import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

export const styles = StyleSheet.create({
  txtTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  txtDescricao: {
    fontSize: 13,
    display: "flex",
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  swiperWrapper: {
    marginRight: 400,
    marginTop: 65,
    marginBottom: 35,
    height: 220,
  },
  cardsContainer: {
    height: 175,
    borderRadius: 10,
    minWidth: 270,
    justifyContent: "center",
    alignItems: "center",
  },
  swiperContainer: {
  },
});
