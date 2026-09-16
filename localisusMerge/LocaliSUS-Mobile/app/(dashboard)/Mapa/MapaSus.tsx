import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import iconevoltar from "@/assets/img/icon-voltar.png";
import iconeajuda from "@/assets/img/icon-ajuda.png";
import { COLORS } from "@/presentation/theme/AppTheme"

const MapaSus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapArea}>
        <Text >Mapa será exibido aqui</Text>
      </View>

    </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
