import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 7.5,
    marginTop: 15,
    width: 265,
    display: "flex",
    backgroundColor: "#ff0000ff",
    alignItems: "center",
    marginBottom: 10,
  },
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
    flexDirection: "row",
    boxSizing: "border-box",
    width: "10%",
    marginTop: 80,
    marginLeft: -280,
    height: 250,
  },
  cardsContainer: {
    width: 270,
    justifyContent: "center",
    backgroundColor: "#ff00aaff",
    alignItems: "center",
  },
  swiperContainer: {},
});
