import { View } from "react-native";
import telafundo from "../../img/tela-fundo.png";
import curvasuperior from "../../img/curva-superior.png";
import curvainferior from "../../img/curva-inferior.png";
import localisuslogo from "../../img/LocaliSUS-Logo.png";
import { styles } from "../../../assets/componentestelas/inicio/ComponenteInicioTheme";

export const TelaInicio = () => {
  return (
    <>
      <View style={styles.container}>
        <img src={telafundo} />
      </View>
      <View>
        <img style={styles.cardSuperior} src={curvasuperior} />
        <img style={styles.cardSuperior} src={curvainferior} />
      </View>
    </>
  );
};
