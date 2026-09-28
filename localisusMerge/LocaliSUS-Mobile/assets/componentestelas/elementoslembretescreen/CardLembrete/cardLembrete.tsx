import { View, Text, Image, TouchableOpacity } from "react-native";
import { Lembrete } from "@/assets/componentestelas/elementoslembretescreen/LabelLembrete/labelLembrete";
import { styles } from "./cardLembreteTheme";

export type CardLembreteProps = {
  medicamento: Lembrete;
  onRemover?: () => void;
};

export const CardLembrete = ({ medicamento, onRemover }: CardLembreteProps) => {
  const { nomeRemedio, descricaoRemedio, imagemRemedio } = medicamento;

  return (
    <View style={styles.card}>
      <View style={styles.linhaSuperior}>
        <Image source={imagemRemedio} style={styles.imagem} resizeMode="contain" />
        <Text style={styles.descricao} numberOfLines={4}>{descricaoRemedio}</Text>
      </View>

      <View style={styles.linhaInferior}>
        <Text style={styles.nome}>{nomeRemedio}</Text>
        {onRemover && (
          <TouchableOpacity onPress={onRemover}>
            <Text>Remover</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};