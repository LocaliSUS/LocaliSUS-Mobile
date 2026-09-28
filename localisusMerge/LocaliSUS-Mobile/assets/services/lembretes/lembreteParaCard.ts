// services/lembretes/lembreteParaCard.ts
import { Lembrete as LembreteAPI } from "@/services/lembretes/lembreteTypes";
import { Lembrete as LembreteCard } from "@/assets/componentestelas/elementoslembretescreen/LabelLembrete/labelLembrete";
import { montarCatalogoMedicamentos } from "@/assets/mocks/Medicamentos/catalogo/catalogoMedicamento";

function extrairNomeMedicamento(lembrete: LembreteAPI): string {
  const valor: any = lembrete.nomeMedicamento;
  if (valor && typeof valor === "object") return valor.nomeMedicamento;
  if (typeof valor === "string") return valor;
  return lembrete.tipoMedicamento ?? "Medicamento";
}

export function lembreteParaCard(lembrete: LembreteAPI): LembreteCard {
  const nome = extrairNomeMedicamento(lembrete);
  const info = montarCatalogoMedicamentos().find(
    (m) => m.nome.toLowerCase().trim() === nome.toLowerCase().trim()
  );

  return {
    id: lembrete.id,
    nomeRemedio: nome,
    horarioRemedio: String(lembrete.horarioInicial),
    intervaloRemedio: `${lembrete.intervaloHoras}h`,
    tipoRemedio: lembrete.tipoMedicamento ?? info?.categoria ?? "",
    descricaoRemedio: info?.descricao ?? "",
    imagemRemedio: info?.imagem,
  };
}