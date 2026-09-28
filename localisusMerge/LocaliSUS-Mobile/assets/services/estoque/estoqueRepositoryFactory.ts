
import { EstoqueRepositoryApi } from './estoqueRepositoryApi';
import { EstoqueRepositoryMock } from './estoqueRepositoryMock';
import { EstoqueRepository } from './estoqueRepository';

// quando o back expuser hospitalId de verdade, troque para true (ou puxe de um .env)
const BACKEND_SUPORTA_FILTRO_HOSPITAL = false;

export function criarEstoqueRepository(): EstoqueRepository {
  return BACKEND_SUPORTA_FILTRO_HOSPITAL
    ? new EstoqueRepositoryApi()
    : new EstoqueRepositoryMock();
}