import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { useRouter } from "expo-router";

import { styles } from "@/presentation/theme/LoginScreenTheme";
import { CustomTextInput } from "../../presentation/components/CustomTextInput";

import loginViewModel from "./ViewModels/login/LoginViewModel";
import { getUsuario } from "@/services/auth/authService";

const LoginScreen = () => {
  const router = useRouter();

  const {
    cpf,
    senha,
    onChange,
    entrar,
    carregando,
    erro,
  } = loginViewModel();

  const handleLogin = async () => {
    const sucesso = await entrar();

    if (!sucesso) {
      return;
    }

    const usuario = await getUsuario();

    console.log(usuario.tipo);

    if (usuario.tipo === "Administrador") {
      router.push("/(dashboard)/admScreen");
      return;
    }

    router.push("HomeScreen");
  };

  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          {/* Elementos decorativos */}
          <Image
            source={require("@/assets/img/tela-fundo.png")}
            style={styles.backgroundImage}
          />

          <Image
            source={require("@/assets/img/curva-superior.png")}
            style={styles.topDetail}
          />

          <Image
            source={require("@/assets/img/curva-inferior.png")}
            style={styles.bottomDetail}
          />

          {/* Cabeçalho */}
          <View style={styles.header}>
            <Image
              source={require("@/assets/img/LocaliSUS-Logo-Fundo.png")}
              style={styles.imageLogo}
            />

            <Text style={styles.logo}>
              LOCALISUS
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.footer}>

            <Text style={styles.title}>
              Entrar
            </Text>

            <View style={styles.form}>

              <CustomTextInput
                image={require("@/assets/img/icon-cpf.png")}
                placeholder="Insira seu CPF..."
                value={cpf}
                keyboardType="numeric"
                property="cpf"
                onChangeText={onChange}
              />

              <CustomTextInput
                image={require("@/assets/img/icon-senha.png")}
                placeholder="Insira sua Senha..."
                value={senha}
                secureTextEntry
                property="senha"
                onChangeText={onChange}
              />

              {erro && (
                <Text style={styles.erroTexto}>
                  {erro}
                </Text>
              )}

              <TouchableOpacity
                onPress={() => router.push("SenhaEsquecidaService")}
              >
                <Text style={styles.forgotPassword}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
                disabled={carregando}
                activeOpacity={0.8}
              >
                <Text style={styles.loginText}>
                  {carregando ? "Entrando..." : "Entrar"}
                </Text>
              </TouchableOpacity>

            </View>

            {/* Ações inferiores */}
            <View style={styles.bottomActions}>

              <TouchableOpacity
                onPress={() => router.push("/")}
                activeOpacity={0.8}
              >
                <Image
                  source={require("@/assets/img/icon-voltar.png")}
                  style={styles.bottomBack}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
              >
                <Text style={styles.help}>
                  ⓘ Ajuda
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;