import { useState } from "react";
import { criarLembrete } from "@/services/lembretes/lembretesService";
import { MedicamentoNormalizado } from "@/assets/mocks/Medicamentos/catalogo/catalogoMedicamento";

const cadastroLembreteViewModel = () => {
  const [values, setValues] = useState({
    nomeMedicamento: "",
    tipoMedicamento: "",
    horarioInicial: "",
    intervaloHoras: "",
  });
  const [medicamentoSelecionado, setMedicamentoSelecionado] =
    useState<MedicamentoNormalizado | null>(null);

  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });
  };

  // Chamado quando o usuário escolhe um item da busca (mock ou real)
  const selecionarMedicamento = (medicamento: MedicamentoNormalizado) => {
    setMedicamentoSelecionado(medicamento);
    setValues((atual) => ({
      ...atual,
      nomeMedicamento: medicamento.nome,
      tipoMedicamento: medicamento.categoria ?? atual.tipoMedicamento,
    }));
  };

  const cadastrar = async (): Promise<boolean> => {
    setErro(null);
    setSucesso(false);

    // ANTES: só validava horário/intervalo. Dava pra cadastrar lembrete
    // sem medicamento nenhum selecionado.
    if (!values.nomeMedicamento || !values.horarioInicial || !values.intervaloHoras) {
      setErro("Selecione um medicamento e preencha horário e intervalo.");
      return false;
    }

    setCarregando(true);
    try {
      await criarLembrete({
        nomeMedicamento: values.nomeMedicamento,
        horarioInicial: `${values.horarioInicial}:00`,
        intervaloHoras: Number(values.intervaloHoras),
      });
      setSucesso(true);
      setValues({ nomeMedicamento: "", horarioInicial: "", intervaloHoras: "", tipoMedicamento: "" });
      setMedicamentoSelecionado(null);
      return true;
    } catch (err: any) {
      setErro(err.response?.data?.message ?? "Erro ao criar lembrete. Tente novamente.");
      return false;
    } finally {
      setCarregando(false);
    }
  };

  return {
    ...values,
    medicamentoSelecionado,
    onChange,
    selecionarMedicamento,
    cadastrar,
    carregando,
    erro,
    sucesso,
  };
};

export default cadastroLembreteViewModel;