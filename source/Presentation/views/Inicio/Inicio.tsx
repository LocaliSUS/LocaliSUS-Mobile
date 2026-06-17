import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { Color } from "../../theme/AppTheme";

export const Inicio = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Image style={styles.imageLogo}
          source={require("../../../../assets/img/LocaliSUS-Logo-Fundo.png")} />
        <Text style={styles.logo}>LOCALISUS</Text>
      </View>


      <View style={styles.content}>
        <Image style={styles.imageFundo}
          source={require("../../../../assets/img/tela-fundo.png")} />
      </View>


      <View style={styles.footer}>
        <Text style={styles.title}>Acesso</Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}>Já tem uma conta?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Cadastre-se!</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.help}>ⓘ Ajuda</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  imageFundo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 420,
    height: 390,
  },
  container: {
    flex: 1,
    backgroundColor: Color.darkBlue,

  },

  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  content: {
    flex: 3,
    backgroundColor: Color.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },

  placeholder: {
    fontSize: 120,
  },

  footer: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  loginButton: {
    backgroundColor: Color.mintGreen,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20,
  },

  loginText: {
    color: Color.darkBlue,
    fontWeight: "bold",
  },

  registerButton: {
    backgroundColor: Color.goldenYellow,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 20,
  },

  registerText: {
    color: Color.darkBlue,
    fontWeight: "bold",
  },

  help: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});