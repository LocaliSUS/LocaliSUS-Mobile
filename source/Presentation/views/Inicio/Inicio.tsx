import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Color } from "../../theme/AppTheme";

export const Inicio = () => {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.header}>
        <Image style={imageLogo}
        source = { require()}/>
        <Text style={styles.logo}>LOCALISUS</Text>
      </View>

      
      <View style={styles.content}>
        <Text style={styles.placeholder}>💊</Text>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.title}>Acesso</Text>

        <TouchableOpacity style={styles.loginButton}>
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