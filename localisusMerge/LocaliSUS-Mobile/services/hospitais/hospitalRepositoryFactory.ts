import { HospitalRepository } from './hospitalRepository';
import { HospitalRepositoryHibrido } from './hospitalRepositoryHibrido';

export function criarHospitalRepository(): HospitalRepository {
  return new HospitalRepositoryHibrido();
}