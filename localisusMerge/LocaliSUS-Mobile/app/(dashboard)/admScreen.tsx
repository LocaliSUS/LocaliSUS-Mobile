import { useState } from "react";
import { styles } from "@/presentation/theme/admScreenTheme"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "@/presentation/theme/AppTheme";
import useRequireAdmin from "@/services/admin/require/requireAdmin"
import { criarMedicamento } from "@/services/admin/criarMedicamentoService";

const CadastrarMedicamentoScreen = () => {
  const { verificando, autorizado } = useRequireAdmin();

  const [nomeMedicamento, setNomeMedicamento] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [tipo, setTipo] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  if (verificando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator color={COLORS.darkBlue} />
      </View>
    );
  }

  if (!autorizado) {
    return null;
  }

  const handleCadastrar = async () => {
    setErro(null);
    setMensagem(null);

    if (!nomeMedicamento || !dosagem || !quantidade) {
      setErro("Preencha todos os campos.");
      return;
    }

    setCarregando(true);
    try {
      await criarMedicamento({
        nomeMedicamento,
        dosagem: parseFloat(dosagem.replace(",", ".")),
        quantidade: parseInt(quantidade, 10),
        tipo,
      });
      setMensagem("Medicamento cadastrado com sucesso!");
      setNomeMedicamento("");
      setDosagem("");
      setQuantidade("");
      setTipo("");
    } catch (err: any) {
      setErro(
        err.response?.data?.Mensagem ??
          err.response?.data?.title ??
          "Erro ao cadastrar medicamento."
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Medicamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do medicamento"
        value={nomeMedicamento}
        onChangeText={setNomeMedicamento}
      />
      <TextInput
        style={styles.input}
        placeholder="Dosagem (ex: 500)"
        value={dosagem}
        onChangeText={setDosagem}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo"
        value={tipo}
        onChangeText={setTipo}
      />

      {erro && <Text style={styles.erro}>{erro}</Text>}
      {mensagem && <Text style={styles.sucesso}>{mensagem}</Text>}

      <TouchableOpacity
        style={styles.botao}
        onPress={handleCadastrar}
        disabled={carregando}
      >
        <Text style={styles.botaoTexto}>
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastrarMedicamentoScreen;
