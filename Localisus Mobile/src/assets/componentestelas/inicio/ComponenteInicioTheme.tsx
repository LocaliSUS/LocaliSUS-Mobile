import { View, StyleSheet } from "react-native";

export const TelaInicioThme = () => {
  return <View style={styles.container}></View>;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardSuperior: {
    top: 0,
  },
  cardInferior: {
    bottom: 0,
  },
});
