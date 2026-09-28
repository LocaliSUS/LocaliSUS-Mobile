import React from "react";
import { StyleSheet, View } from "react-native";
import { router, Href } from "expo-router";
import { COLORS } from "@/presentation/theme/AppTheme";
import { CabecalhoCustomizavel } from "@/assets/componentesgenericos/cabecalho/cabecalhoCustomizavel/cabecalhoCustomizavel";
import { MapaSusMapa } from "@/assets/componentestelas/mapa/MapaSusMapa";
import { HospitalSus } from "@/services/hospitais/types";

// mapeia o id do hospital pra rota da tela de info correspondente
const ROTAS_POR_HOSPITAL: Record<number, Href> = {
  1: "/hospitais/upaSorocabanaInfoScreen",
  2: "/hospitais/ameGeraldoInfoScreen",
  3: "/hospitais/vilaRomanaInfoScreen",
};

const MapaSus = () => {
  const handleHospitalPress = (hospital: HospitalSus) => {
    const rota = ROTAS_POR_HOSPITAL[hospital.id];
    if (!rota) {
      console.warn(`Nenhuma rota de info configurada para o hospital ${hospital.id}`);
      return;
    }
    router.push(rota);
  };

  return (
    <>
      <CabecalhoCustomizavel
        showBackButton={true}
        backButtonBg={COLORS.mintGreenLight}
      />
      <View style={styles.container}>
        <View style={styles.mapArea}>
          <MapaSusMapa onHospitalPress={handleHospitalPress} />
        </View>
      </View>
    </>
  );
};

export default MapaSus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
  mapArea: {
    flex: 2,
    backgroundColor: "#bdbdbdff",
  },
});