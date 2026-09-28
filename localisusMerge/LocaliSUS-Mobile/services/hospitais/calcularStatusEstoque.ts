import { Medicamento } from '@/services/medicamentos/types';

export type StatusEstoque = 'DISPONIVEL' | 'CRITICO' | 'INDISPONIVEL';

export function calcularStatusEstoque(medicamentos: Medicamento[]): StatusEstoque {
  if (medicamentos.length === 0) return 'INDISPONIVEL';

  const totalQuantidade = medicamentos.reduce((soma, m) => soma + m.quantidade, 0);
  const algumZerado = medicamentos.some((m) => m.quantidade === 0);
  const mediaQuantidade = totalQuantidade / medicamentos.length;

  if (totalQuantidade === 0) return 'INDISPONIVEL';
  if (algumZerado || mediaQuantidade < 20) return 'CRITICO';
  return 'DISPONIVEL';
}