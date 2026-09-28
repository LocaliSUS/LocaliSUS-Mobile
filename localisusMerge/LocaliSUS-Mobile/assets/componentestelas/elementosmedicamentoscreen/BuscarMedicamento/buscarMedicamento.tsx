import { useEffect, useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import {
  BuscarMedicamentoInterface,
  MedicamentoBusca,
} from "@/assets/services/medicamentos/buscarMedicamentoService";
import {styles} from "./buscarMedicamentoTheme"

interface Props {
  buscaService: BuscarMedicamentoInterface;
}

export const BuscarMedicamento = ({ buscaService }: Props) => {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState<MedicamentoBusca[]>([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setResultados(await buscaService.search(query));
    }, 300);
    return () => clearTimeout(timer);
  }, [query, buscaService]);

  return (
    <View style={styles.barraPesquisa}>
      <TextInput 
        style={styles.placeholder}
        placeholder="Digite o nome do remédio"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nomeComum}</Text>}
      />
    </View>
  );
};