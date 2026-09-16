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
    const { nomeRemedio, descricaoRemedio, imagemRemedio, rotaRemedio, favoritado } = medicamento;

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
                    <TouchableOpacity onPress={() => onToggleFavorito?.(nomeRemedio)}>
                        <Text style={styles.favorito}>estrela</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoEncontrar}
                        onPress={() => rotaRemedio && router.push(rotaRemedio)}
                    >
                        <Text style={styles.botaoEncontrarTexto}> Encontrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};