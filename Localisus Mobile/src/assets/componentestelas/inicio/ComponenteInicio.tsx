import { View, Image } from "react-native";
import telafundo from "../../img/tela-fundo.png";
import curvasuperior from "../../img/curva-superior.png";
import curvainferior from "../../img/curva-inferior.png";
import localisuslogo from "../../img/LocaliSUS-Logo.png";
import { styles } from "../../../assets/componentestelas/inicio/ComponenteInicioTheme";

export const TelaInicio = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={telafundo} />
      </View>
      <View>
        <Image style={styles.cardSuperior} source={curvasuperior} />
        <Image style={styles.cardInferior} source={curvainferior} />
      </View>
    </>
  );
};
