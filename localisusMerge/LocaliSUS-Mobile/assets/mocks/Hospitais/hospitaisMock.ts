import { HospitalSus } from '@/services/hospitais/types';

export type HospitalBase = Omit<HospitalSus, 'status'>;

export const hospitaisMock: HospitalBase[] = [
  { id: 1, nome: 'UPA Sorocabana',             latitude: -23.5270, longitude: -46.6660, endereco: 'Lapa, São Paulo - SP' },
  { id: 2, nome: 'AME Geraldo de Campos Mota', latitude: -23.5410, longitude: -46.6210, endereco: 'Santa Cecília, São Paulo - SP' },
  { id: 3, nome: 'UBS Vila Romana',            latitude: -23.5330, longitude: -46.6800, endereco: 'Vila Romana, São Paulo - SP' },
  { id: 4, nome: 'Santa Casa de São Paulo',    latitude: -23.5407, longitude: -46.6494, endereco: 'Santa Cecília, São Paulo - SP' },
  { id: 5, nome: 'Hospital das Clínicas',      latitude: -23.5567, longitude: -46.6700, endereco: 'Cerqueira César, São Paulo - SP' },
  { id: 6, nome: 'UBS Lapa',                   latitude: -23.5210, longitude: -46.7020, endereco: 'Lapa, São Paulo - SP' },
  { id: 7, nome: 'UPA Perdizes',               latitude: -23.5330, longitude: -46.6780, endereco: 'Perdizes, São Paulo - SP' },
  { id: 8, nome: 'UBS Água Branca',            latitude: -23.5180, longitude: -46.6600, endereco: 'Água Branca, São Paulo - SP' },
];