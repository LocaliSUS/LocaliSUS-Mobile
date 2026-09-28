export interface HospitalSus {
  id: number;
  nome: string;
  latitude: number;
  longitude: number;
  status: 'DISPONIVEL' | 'CRITICO' | 'INDISPONIVEL';
  endereco: string;
}