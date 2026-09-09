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
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 5, //gambiarra suprema, ao modificarmos o padding desse elemento estamos realizando alterações no espaçamento das letras dentro dos cards superiores coloridos da tela homeScreen
    //os elementos presentes em unidades próxima por sua vez sofrem alterações em relação ao espaçamento entre os cards
    //mas também realiza alterações nos botõea da tela de informações hospital
    alignItems: "center",
  },
});
