
import { View, Text, StyleSheet } from 'react-native';
import { getNivelEstoque, corPorNivel, textoPorNivel } from '@/assets/utils/Estoque/estoqueStatus';

interface Props {
  quantidade: number;
}

export const BadgeEstoque = ({ quantidade }: Props) => {
  const nivel = getNivelEstoque(quantidade);
  return (
    <View style={[styles.badge, { backgroundColor: corPorNivel(nivel) }]}>
      <Text style={styles.texto}>{textoPorNivel(nivel)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, alignSelf: 'flex-start' },
  texto: { color: '#fff', fontSize: 12, fontWeight: '600' },
});