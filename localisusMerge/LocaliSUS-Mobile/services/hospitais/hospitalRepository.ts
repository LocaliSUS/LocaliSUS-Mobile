import { HospitalSus } from './types';

export interface HospitalRepository {
  listarTodos(): Promise<HospitalSus[]>;
}