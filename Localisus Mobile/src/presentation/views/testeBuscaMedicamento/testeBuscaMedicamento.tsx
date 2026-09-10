import React, {useRef, useState} from 'react'
import {
    ActivityIndicator,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import type { Medicamento} from '../../../assets/mocks/medicamento/medicamentosMock'
import type { buscarMedicamentoInterface } from '../../../assets/services/medicamentos/buscarMedicamentoService'

type RootStackParamList = {
    DetalheMedicamento: { id: string};
}

type NavigationBuscaMedicamentoProp = NativeStackNavigationProp<
    RootStackParamList,
    'DetalheMedicamento'
>;

interface BuscaMedicamentoProps { 
    buscaService: buscarMedicamentoInterface;
    intervalo?: number    
}

export default function BuscaMedicamento({
    buscaService,
    intervalo = 150
}: BuscaMedicamentoProps): React.JSX.Element {
    const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigation = useNavigation<NavigationBuscaMedicamentoProp>();

  const handleChangeText = (text: string): void => {
    setQuery(text);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!text.trim()) {
      setResults([]);
      return;
    }

    debounceRef.current = setTimeout(() => {
      void executeSearch(text);
    }, intervalo);
  };

  const executeSearch = async (text: string): Promise<void> => {
    setLoading(true);
    try {
      const data = await buscaService.search(text);
      setResults(data);
    } catch (err) {
      console.error('Erro ao buscar medicamentos:', err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (medicamento: Medicamento): void => {
    navigation.navigate('DetalheMedicamento', { id: medicamento.id });
    setResults([]);
    setQuery('');
  };

  const handleSubmit = (): void => {
    // Se houver exatamente 1 resultado, navega direto ao confirmar a busca.
    // Se houver 0, não faz nada. Se houver mais de 1, deixa a lista visível.
    if (results.length === 1) {
      handleSelect(results[0]);
    }
}
} return (
    <View>
      <TextInput
        value={query}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
        placeholder="Buscar medicamento..."
        returnKeyType="search"
        autoCorrect={false}
      />

      {loading && <ActivityIndicator testID="search-loading" />}

      {results.length > 0 && (
        <FlatList<Medicamento>
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)}>
              <Text>{item.nomeComum}</Text>
              {/* {item.activeIngredient && (
                <Text style={{ fontSize: 12, color: '#666' }}>
                  {item.activeIngredient}
                </Text>
              )} */}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}