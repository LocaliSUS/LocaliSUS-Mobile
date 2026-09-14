import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "@/presentation/theme/AppTheme";

const Inicio = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>

      <Image
        source={require("@/assets/img/tela-fundo.png")}
        style={styles.imageFundo}
      />

      {/* FUNDOS CURVADOS */}
      <Image
        source={require("@/assets/img/curva-superior.png")}
        style={styles.topDetail}
      />

      <Image
        source={require("@/assets/img/curva-inferior.png")}
        style={styles.bottomDetail}
      />

      {/* cabeçalho */}
      <View style={styles.header}>
        <Image
          style={styles.imageLogo}
          source={require("@/assets/img/LocaliSUS-Logo-Fundo.png")}
        />
        <Text style={styles.logo}>LOCALISUS</Text>
      </View>



      <View style={styles.footer}>
        <Text style={styles.title}>Acesso</Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("Login")}
        >
          <Text style={styles.loginText}>Já tem uma conta?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}
          onPress={() => router.push("CadastroSus")}
        >
          <Text style={styles.registerText}>Cadastre-se!</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.help}>ⓘ Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },

  topDetail: {
    position: "absolute",
    width: 500,
    height: 279,
    top: -5,
    left: -49,
    resizeMode: "contain",
  },

  bottomDetail: {
    position: "absolute",
    width: 750,
    height: 500,
    bottom: -200,
    left: -172,
    resizeMode: "contain",
  },

  header: {
    flex: 1.4,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 320
  },

  imageLogo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },

  content: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },

  imageFundo: {
    position: "absolute",
    width: "100%",
    paddingBottom: 900,
    height: "100%",
    resizeMode: "cover",
  },

  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    gap: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 55,
  },

  loginButton: {
    backgroundColor: COLORS.mintGreen,
    width: 150,
    height: 25,
    borderRadius: 22,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  loginText: {
    color: COLORS.darkBlue,
    fontWeight: "bold",
    fontSize: 15,
  },

  registerButton: {
    backgroundColor: COLORS.goldenYellow,
    width: 110,
    height: 30,
    fontWeight: "bold",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  registerText: {
    color: COLORS.darkBlue,
    fontWeight: "bold",
    fontSize: 15,
  },

  help: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 5,
  },
});
