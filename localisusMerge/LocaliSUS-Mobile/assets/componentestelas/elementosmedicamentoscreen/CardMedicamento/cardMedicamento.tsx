import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LabelMedicamentoProps } from "@/assets/componentestelas/elementosmedicamentoscreen/LabelMedicamento/labelMedicamento";
import { styles } from "./cardMedicamentoTheme";

type CardMedicamentoProps = {
  medicamento: LabelMedicamentoProps;
  onToggleFavorito?: (nome: string) => void;
};

export const CardMedicamento = ({ medicamento, onToggleFavorito }: CardMedicamentoProps) => {
  const router = useRouter();
  const { nomeRemedio, descricaoRemedio, imagemRemedio } = medicamento;

  const handleEncontrar = () => {
    if (!nomeRemedio) return;
    router.push({ pathname: "/mapa", params: { medicamento: nomeRemedio } }); // ajuste "/mapa"
  };

  return (
    <View style={styles.card}>
      <View style={styles.linhaSuperior}>
        <Image source={imagemRemedio} style={styles.imagem} resizeMode="contain" />
        <Text style={styles.descricao} numberOfLines={4}>
          {descricaoRemedio}
        </Text>
      </View>

      <View style={styles.linhaInferior}>
        <Text style={styles.nome}>{nomeRemedio}</Text>

        <View style={styles.acoes}>
          <TouchableOpacity onPress={() => nomeRemedio && onToggleFavorito?.(nomeRemedio)}>
            <Text style={styles.favorito}>estrela</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoEncontrar} onPress={handleEncontrar}>
            <Text style={styles.botaoEncontrarTexto}> Encontrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};