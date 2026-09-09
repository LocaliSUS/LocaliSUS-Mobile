import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  txtTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  txtDescricao: {
    fontSize: 13,
    display: "flex",
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  swiperWrapper: {
    marginRight: 400,
    marginBottom: 65,
    height: 220,
  },
  cardsContainer: {
    height: 160,
    borderRadius: 20,
    minWidth: 50,
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
});
