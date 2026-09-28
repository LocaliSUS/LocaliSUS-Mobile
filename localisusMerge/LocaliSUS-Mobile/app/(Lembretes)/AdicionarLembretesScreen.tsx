import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { styles } from "@/presentation/theme/AdicionarLembreteScreenTheme";
import cadastroLembreteViewModel from "../(auth)/ViewModels/lembretes/CadastroLembreteViewModel";
import {
  montarCatalogoMedicamentos,
  MedicamentoNormalizado,
} from "@/assets/mocks/Medicamentos/catalogo/catalogoMedicamento";

interface CampoFormulario {
  id: string;
  titulo: string;
  valor: string;
  onChange: (texto: string) => void;
}

const AdicionarLembretesScreen = () => {
  const {
    nomeMedicamento,
    tipoMedicamento,
    horarioInicial,
    intervaloHoras,
    onChange,
    selecionarMedicamento,
    cadastrar,
    carregando,
    erro,
    sucesso,
  } = cadastroLembreteViewModel();

  const [buscaMedicamento, setBuscaMedicamento] = useState("");
  const [sugestoes, setSugestoes] = useState<MedicamentoNormalizado[]>([]);
  const [catalogoCompleto, setCatalogoCompleto] = useState<MedicamentoNormalizado[]>([]);
  const [carregandoCatalogo, setCarregandoCatalogo] = useState(true);

  useEffect(() => {
    montarCatalogoMedicamentos()
      .then(setCatalogoCompleto)
      .finally(() => setCarregandoCatalogo(false));
  }, []);

  const handleBuscarMedicamento = (texto: string) => {
    setBuscaMedicamento(texto);
    if (!texto.trim()) {
      setSugestoes([]);
      return;
    }
    const termo = texto.toLowerCase().trim();
    const resultado = catalogoCompleto
      .filter((m) => m.nome.toLowerCase().includes(termo))
      .slice(0, 8);
    setSugestoes(resultado);
  };

  const handleSelecionar = (medicamento: MedicamentoNormalizado) => {
    selecionarMedicamento(medicamento);
    setBuscaMedicamento(medicamento.nome);
    setSugestoes([]);
  };

  const outrosCampos: CampoFormulario[] = [
    { id: "tipo", titulo: "Tipo do Medicamento", valor: tipoMedicamento, onChange: (t) => onChange("tipoMedicamento", t) },
    { id: "horario", titulo: "Horário Inicial", valor: horarioInicial, onChange: (t) => onChange("horarioInicial", t) },
    { id: "intervalo", titulo: "Intervalo (horas)", valor: intervaloHoras, onChange: (t) => onChange("intervaloHoras", t) },
  ];

  return (
    <View style={styles.lembreteScreenBackground}>
      <Text style={styles.tituloTelaAdicionarLembretes}>Adicionar Lembretes</Text>

      <View style={styles.lembreteScreenTheme}>
        <View style={styles.containers}>
          <Text style={styles.txtContainersTitulo}>Busque o Medicamento</Text>

          <TextInput
            style={styles.placeholderLembretes}
            value={buscaMedicamento}
            onChangeText={handleBuscarMedicamento}
            placeholder={carregandoCatalogo ? "Carregando medicamentos..." : "Digite o nome do medicamento"}
            editable={!carregandoCatalogo}
          />

          {sugestoes.length > 0 && (
            <FlatList
              data={sugestoes}
              keyExtractor={(item) => item.id}
              style={{ maxHeight: 160 }}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelecionar(item)}>
                  <Text style={styles.txtContainersTitulo}>{item.nome}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          {nomeMedicamento !== "" && (
            <Text>Selecionado: {nomeMedicamento}</Text>
          )}
        </View>

        <FlatList
          data={outrosCampos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.containers}>
              <Text style={styles.txtContainersTitulo}>{item.titulo}</Text>
              <TextInput
                style={styles.placeholderLembretes}
                value={item.valor}
                onChangeText={item.onChange}
                placeholder={item.titulo}
              />
            </View>
          )}
        />

        {erro && <Text>{erro}</Text>}
        {sucesso && <Text>Lembrete cadastrado com sucesso!</Text>}

        <TouchableOpacity style={styles.botaoAdicionar} onPress={cadastrar} disabled={carregando}>
          <Text style={styles.txtBotaoAdicionarLembrete}>
            {carregando ? "Cadastrando..." : "Adicionar Lembrete"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdicionarLembretesScreen;