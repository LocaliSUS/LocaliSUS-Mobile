// src/presentation/screens/EstoqueHospitalScreen.tsx
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { criarEstoqueRepository } from '@/assets/services/estoque/estoqueRepositoryFactory';
import { Medicamento } from '@/services/medicamentos/types';
import { BadgeEstoque } from '@/assets/componentesgenericos/badgeEstoque/BadgeEstoque';
import { CabecalhoCustomizavel } from '@/assets/componentesgenericos/cabecalho/cabecalhoCustomizavel/cabecalhoCustomizavel';

const estoqueRepository = criarEstoqueRepository();

const EstoqueHospitalScreen = () => {
  const { hospitalId, hospital } = useLocalSearchParams<{ hospitalId?: string; hospital?: string }>();
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!hospitalId) {
      setErro('Hospital não informado.');
      setCarregando(false);
      return;
    }
    estoqueRepository
      .listarPorHospital(Number(hospitalId))
      .then(setMedicamentos)
      .catch(() => setErro('Não foi possível carregar o estoque.'))
      .finally(() => setCarregando(false));
  }, [hospitalId]);

  return (
    <>
      <CabecalhoCustomizavel title={`Estoque - ${hospital ?? 'Unidade'}`} showBackButton />
      {carregando ? (
        <ActivityIndicator style={{ marginTop: 40 }} />
      ) : erro ? (
        <Text style={styles.erro}>{erro}</Text>
      ) : medicamentos.length === 0 ? (
        <Text style={styles.erro}>Nenhum medicamento cadastrado para esta unidade.</Text>
      ) : (
        <FlatList
          data={medicamentos}
          keyExtractor={(item) => String(item.idMedicamento)}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.linha}>
              <View>
                <Text style={styles.nome}>{item.nomeMedicamento}</Text>
                <Text style={styles.dosagem}>{item.dosagem} · {item.quantidade} un.</Text>
              </View>
              <BadgeEstoque quantidade={item.quantidade} />
            </View>
          )}
        />
      )}
    </>
  );
};

export default EstoqueHospitalScreen;

const styles = StyleSheet.create({
  lista: { padding: 16, gap: 10 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 10 },
  nome: { fontWeight: 'bold', fontSize: 14 },
  dosagem: { fontSize: 12, color: '#777', marginTop: 2 },
  erro: { textAlign: 'center', marginTop: 40, color: '#c0392b' },
});