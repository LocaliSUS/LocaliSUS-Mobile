import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { CabecalhoHome } from "@/assets/componentesgenericos/cabecalho/CabecalhoHome";
import { COLORS } from "@/presentation/theme/AppTheme";
import { styles } from "@/presentation/theme/CabecalhoCustomizavelTheme";

interface CabecalhoCustomizavelProps {
  title?: string;
  showBackButton?: boolean;
  backButtonBg?: string;
  children?: React.ReactNode;
}

export function CabecalhoCustomizavel({
  title,
  showBackButton = false,
  backButtonBg = COLORS.coralRedLight,
  children,
}: CabecalhoCustomizavelProps) {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      {/* Renderiza a barra de pesquisa ou qualquer elemento que a tela pedir */}
      <CabecalhoHome>
        {showBackButton && (
          <Pressable
            style={[styles.backButton, { backgroundColor: backButtonBg }]}
            onPress={() => router.push("/HomeScreen.tsx")}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>{"<"}</Text>
          </Pressable>
        )}
        <View style={styles.headerTopRow}>
          {title && <Text style={styles.headerTitle}>{title}</Text>}
        </View>

        {children}
      </CabecalhoHome>
    </View>
  );
}
