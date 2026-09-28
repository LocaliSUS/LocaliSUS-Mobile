

import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "@/presentation/theme/AppTheme";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
      const timer = setTimeout(() => {
      router.replace("/(auth)/inicio");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/img/LocaliSUS-Logo-Fundo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
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
    marginBottom: 35,
  },

  loginButton: {
    backgroundColor: COLORS.mintGreen,
    width: 180,
    height: 45,
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
    width: 160,
    height: 45,
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
