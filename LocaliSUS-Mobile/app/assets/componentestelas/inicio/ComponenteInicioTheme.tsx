import { View, StyleSheet } from "react-native";
import { RotateInDownRight } from "react-native-reanimated";

export const TelaInicioThme = () => {
  return <View style={styles.container}></View>;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1
  },
  cardSuperior: {
    top: 0, 
    height: 350,
    width: 450,
    zIndex: -10
  },
  cardInferior: {
    bottom: 0,
    height: 240,
    transform: [{rotate: '270deg'}],
    borderRadius: 500,
    minWidth: 450,
    zIndex: 0
  },
});
