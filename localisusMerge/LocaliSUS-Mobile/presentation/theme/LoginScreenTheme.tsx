import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: COLORS.darkBlue,
  },

  /*
   * Elementos decorativos.
   *
   * Absolute é intencional aqui:
   * essas imagens não fazem parte do fluxo do conteúdo.
   */
  backgroundImage: {
    ...StyleSheet.absoluteFill,
    resizeMode: "cover",
  },

  topDetail: {
    position: "absolute",
    width: "125%",
    height: 280,
    top: -5,
    left: "-12.5%",
    resizeMode: "contain",
  },

  bottomDetail: {
    position: "absolute",
    width: "150%",
    height: 590,
    bottom: -200,
    left: "-25%",
    resizeMode: "contain",
  },

  /*
   * Cabeçalho
   */
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35,
  },

  imageLogo: {
    width: 105,
    height: 105,
    resizeMode: "contain",
    marginTop: -40
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
  },

  /*
   * Área principal do formulário
   */
  footer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 1,
  },

  /*
   * Agrupa somente os elementos do formulário.
   * Substitui o antigo "elementosAbaixoEntrar".
   */
  form: {
    width: "100%",
    alignItems: "center",
    position: 'absolute',
    bottom: 110,
    gap: 8,
  },

  forgotPassword: {
    color: "#FFFFFF",
    fontSize: 15,
    textDecorationLine: "underline",
    marginTop: 2,
    marginBottom: 4,
  },

  erroTexto: {
    width: "100%",
    color: "#FF6B6B",
    fontSize: 13,
    textAlign: "center",
    marginTop: 2,
  },

  loginButton: {
    width: 150,
    height: 38,
    marginTop: 4,

    backgroundColor: COLORS.mintGreen,

    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  loginText: {
    color: COLORS.darkBlue,
    fontSize: 15,
    fontWeight: "700",
  },

  /*
   * Ações inferiores
   */
  bottomActions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "auto",
    paddingHorizontal: 4,
  },

  bottomBack: {
    width: 52,
    height: 52,
    resizeMode: "contain",
  },

  help: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});