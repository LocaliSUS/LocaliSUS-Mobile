import { getMedicamentos } from '@/services/medicamentos/medicamentoService';
import { medicamentosPopulares } from '@/assets/mocks/Medicamentos/telaMedicamento/telaMedicamentoMocks';

export interface MedicamentoNormalizado {
  id: string;
  nome: string;
  descricao?: string;
  categoria?: string;
  imagem?: any;
}

export async function montarCatalogoMedicamentos(): Promise<MedicamentoNormalizado[]> {
  const porNome = new Map<string, MedicamentoNormalizado>();

  // 1. Dados visuais (imagem/descrição/categoria) — só enriquecimento, nunca a fonte de verdade
  medicamentosPopulares.forEach((m) => {
    const chave = m.nomeRemedio.toLowerCase().trim();
    porNome.set(chave, {
      id: `visual-${chave}`,
      nome: m.nomeRemedio,
      descricao: m.descricaoRemedio,
      categoria: m.categoria,
      imagem: m.imagemRemedio,
    });
  });

  // 2. Dados reais do backend — é o que precisa aparecer sempre, mesmo sem imagem
  try {
    const reais = await getMedicamentos();
    reais.forEach((m) => {
      const chave = m.nomeMedicamento.toLowerCase().trim();
      const existente = porNome.get(chave);
      porNome.set(chave, {
        id: String(m.idMedicamento),
        nome: m.nomeMedicamento,
        descricao: existente?.descricao,
        categoria: existente?.categoria,
        imagem: existente?.imagem,
      });
    });
  } catch (err) {
    console.warn('Não foi possível buscar medicamentos do backend, usando apenas mock visual:', err);
  }

  return Array.from(porNome.values());
}