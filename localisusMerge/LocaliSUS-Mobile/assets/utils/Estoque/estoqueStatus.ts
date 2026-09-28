// src/utils/estoqueStatus.ts
export type NivelEstoque = 'CRITICO' | 'ATENCAO' | 'NORMAL';

const LIMITE_CRITICO = 20;
const LIMITE_ATENCAO = 50;

export function getNivelEstoque(quantidade: number): NivelEstoque {
  if (quantidade < LIMITE_CRITICO) return 'CRITICO';
  if (quantidade < LIMITE_ATENCAO) return 'ATENCAO';
  return 'NORMAL';
}

export function corPorNivel(nivel: NivelEstoque): string {
  switch (nivel) {
    case 'CRITICO': return '#ff5252';
    case 'ATENCAO': return '#ffb300';
    default: return '#2ecc71';
  }
}

export function textoPorNivel(nivel: NivelEstoque): string {
  switch (nivel) {
    case 'CRITICO': return 'Crítico';
    case 'ATENCAO': return 'Atenção';
    default: return 'Normal';
  }
}