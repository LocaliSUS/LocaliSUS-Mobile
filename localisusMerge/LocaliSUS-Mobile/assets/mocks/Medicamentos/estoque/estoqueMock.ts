import { Medicamento } from '@/services/medicamentos/types';

const REMEDIOS = [
  { nome: 'Dipirona',      dosagem: '500mg' },
  { nome: 'Paracetamol',   dosagem: '750mg' },
  { nome: 'Ibuprofeno',    dosagem: '400mg' },
  { nome: 'Naproxeno',     dosagem: '500mg' },
  { nome: 'Diclofenaco',   dosagem: '50mg'  },
  { nome: 'Cetoprofeno',   dosagem: '100mg' },
  { nome: 'Meloxicam',     dosagem: '15mg'  },
  { nome: 'Celecoxibe',    dosagem: '200mg' },
  { nome: 'Atorvastatina', dosagem: '20mg'  },
  { nome: 'Rosuvastatina', dosagem: '10mg'  },
  { nome: 'Sinvastatina',  dosagem: '20mg'  },
];

// hospitalId -> quantidades, na ordem de REMEDIOS
const QUANTIDADES: Record<number, number[]> = {
  1: [120, 80, 45, 60, 35, 50, 40, 30, 70, 55, 65],
  2: [0,   15, 60, 25, 0,  30, 20, 10, 30, 45, 0],
  3: [6,   0,  3,  12, 8,  0,  5,  9,  80, 25, 40],
  4: [200, 150, 90, 80, 70, 60, 55, 45, 110, 90, 100],
  5: [0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  6: [30,  25, 22, 40, 28, 35, 21, 33, 26, 24, 29],
  7: [5,   10, 0,  8,  15, 3,  12, 0,  20, 6,  9],
  8: [55,  0,  40, 35, 0,  25, 30, 20, 0,  15, 50],
};

let contadorId = 1;

export const estoqueMock: Medicamento[] = Object.entries(QUANTIDADES).flatMap(
  ([hospitalId, quantidades]) =>
    quantidades.map((quantidade, i) => ({
      idMedicamento: contadorId++,
      nomeMedicamento: REMEDIOS[i].nome,
      dosagem: REMEDIOS[i].dosagem,
      quantidade,
      hospitalId: Number(hospitalId),
    }))
);