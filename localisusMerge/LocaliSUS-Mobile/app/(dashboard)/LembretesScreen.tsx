import { useCallback, useState } from "react";
import { Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import { CabecalhoCustomizavel } from "@/assets/componentesgenericos/cabecalho/cabecalhoCustomizavel/cabecalhoCustomizavel";
import { TelaAzulClara } from "@/assets/componentesgenericos/telaAzul/telaAzulClara";
import { CardLembrete } from "@/assets/componentestelas/elementoslembretescreen/CardLembrete/cardLembrete";
import { Lembrete as LembreteCard } from "@/assets/componentestelas/elementoslembretescreen/LabelLembrete/labelLembrete";
import buscarMedicamentoService from "@/assets/services/medicamentos/buscarMedicamentoService";
import { BuscarMedicamento } from "@/assets/componentestelas/elementosmedicamentoscreen/BuscarMedicamento/buscarMedicamento";
import { getLembretes, excluirLembrete } from "@/services/lembretes/lembretesService";
import { lembreteParaCard } from "@/assets/services/lembretes/lembreteParaCard";
import { COLORS } from "@/presentation/theme/AppTheme";

const LembretesScreen = () => {
  const serviceBusca = buscarMedicamentoService();
  const router = useRouter();

  const [lembretes, setLembretes] = useState<LembreteCard[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarLembretes = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    try {
      const dados = await getLembretes(); // dados reais do backend
      setLembretes(dados.map(lembreteParaCard));
    } catch (err) {
      console.error(err);
      setErro("Não foi possível carregar seus lembretes.");
    } finally {
      setCarregando(false);
    }
  }, []);

  // Recarrega toda vez que a tela ganha foco (ex: voltando de Adicionar)
  useFocusEffect(
    useCallback(() => {
      carregarLembretes();
    }, [carregarLembretes])
  );

  const handleRemover = async (id: number) => {
    // Remove só o lembrete do perfil do usuário (DELETE /lembretes/{id}).
    // O medicamento no estoque/banco do hospital não é tocado.
    const anteriores = lembretes;
    setLembretes((atual) => atual.filter((l) => l.id !== id)); // otimista
    try {
      await excluirLembrete(id);
    } catch (err) {
      console.error(err);
      setLembretes(anteriores); // desfaz se der erro
    }
  };

  return (
    <>
      <CabecalhoCustomizavel title="Lembretes" showBackButton backButtonBg={COLORS.goldenYellowLight}>
        <BuscarMedicamento buscaService={serviceBusca} />
      </CabecalhoCustomizavel>

      <TelaAzulClara>
        {carregando && <ActivityIndicator />}
        {erro && <Text>{erro}</Text>}
        {!carregando && !erro && lembretes.length === 0 && (
          <Text>Você ainda não tem lembretes cadastrados.</Text>
        )}

        {lembretes.map((lembrete) => (
          <CardLembrete
            key={lembrete.id}
            medicamento={lembrete}
            onRemover={() => handleRemover(lembrete.id)}
          />
        ))}

        <TouchableOpacity onPress={() => router.push("AdicionarLembretesScreen")}>
          <Text>Adicionar Lembrete</Text>
        </TouchableOpacity>
      </TelaAzulClara>
    </>
  );
};

export default LembretesScreen;