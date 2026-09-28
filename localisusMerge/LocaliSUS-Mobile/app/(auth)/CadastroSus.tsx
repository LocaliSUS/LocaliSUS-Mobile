import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { styles } from "@/presentation/theme/CadastroSusTheme";

// componentes
import { RoundedButton } from "../../presentation/components/RoudedButton";
import { CustomTextInput } from "../../presentation/components/CustomTextInput";

// view model
import cadastroViewModel from "./ViewModels/cadastro/CadastroViewModel";
import { useRouter } from "expo-router";

const CadastroSusScreen = () => {
  const router = useRouter();

  const {
    userNome,
    userEmail,
    userCPF,
    userPassword,
    onChange,
    cadastrar,
    carregando,
    erro,
  } = cadastroViewModel();

  const handleCadastro = async () => {
    const sucesso = await cadastrar();

    if (sucesso) {
      router.push("/");
    }
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

          {/* FUNDO PRINCIPAL */}
          <Image
            source={require("@/assets/img/tela-fundo.png")}
            style={styles.FundoImage}
          />

          {/* Card/image */}
          <Image
            source={require("@/assets/img/tela-fundo.png")}
            style={styles.Cardtop}
          />

          <Image
            source={require("@/assets/img/curva-inferior.png")}
            style={styles.cardDow}
          />

          {/* Header */}
          <View style={styles.header}>

            <Image
              style={styles.imageLogo}
              source={require("@/assets/img/LocaliSUS-Logo-Fundo.png")}
            />

            <Text style={styles.textlogo}>
              LOCALISUS
            </Text>

          </View>

          {/* Formulário */}
          <View style={styles.footer}>

            <Text style={styles.title}>
              Cadastro
            </Text>

            <CustomTextInput
              image={require("@/assets/img/signature(1).png")}
              placeholder="Insira seu Nome..."
              keyboardType="default"
              secureTextEntry={false}
              property="userNome"
              onChangeText={onChange}
              value={userNome}
            />

            <CustomTextInput
              image={require("@/assets/img/icone-numero.png")}
              placeholder="Insira seu Email..."
              keyboardType="email-address"
              secureTextEntry={false}
              property="userEmail"
              onChangeText={onChange}
              value={userEmail}
            />

            <CustomTextInput
              image={require("@/assets/img/icon-cpf.png")}
              placeholder="Insira seu CPF..."
              keyboardType="numeric"
              secureTextEntry={false}
              property="userCPF"
              onChangeText={onChange}
              value={userCPF}
            />

            <CustomTextInput
              image={require("@/assets/img/icon-senha.png")}
              placeholder="Insira sua Senha..."
              keyboardType="default"
              secureTextEntry={true}
              property="userPassword"
              onChangeText={onChange}
              value={userPassword}
            />

            {erro && (
              <Text style={styles.erroTexto}>
                {erro}
              </Text>
            )}

            <RoundedButton
              style={styles.cadastroButton}
              onPress={handleCadastro}
            >
              <Text>
                {carregando ? "Cadastrando..." : "Cadastrar"}
              </Text>
            </RoundedButton>

            {/* Voltar + Ajuda */}
            <View style={styles.bottomIcons}>

              <TouchableOpacity
                onPress={() => router.push("/")}
                style={styles.voltarButton}
              >
                <Image
                  style={styles.voltarLogo}
                  source={require("@/assets/img/icon-voltar.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
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

export default CadastroSusScreen;