import { TipoMedicamento } from "../tipoMedicamento/tipoMedicamento";

export type Medicamento = {
    id: string;
    nomeComum: string;
    nomeTecnico?: string; 
    tipoMedicamento: TipoMedicamento
}

export const mockMedicamentos = [
    { id: '1', nomeComum: 'Dipirona', nomeTecnico: 'Metamizol', tipoMedicamento: 'Analgesico', receitaMedicamento: 'Dipirona Monoidratada' },
    { id: '2', nomeComum: 'Amoxicilina', nomeTecnico: 'Amoxicilina', tipoMedicamento: 'Antibiotico', receitaMedicamento: 'Amoixicilina Tri-hidratada' },
    { id: '3', nomeComum: 'Catopril', nomeTecnico: 'Catopril', tipoMedicamento: 'Aniti-hipertensivo', receitaMedicamento: 'Ibuprofeno' },
    { id: '4', nomeComum: 'Ibuprofeno', nomeTecnico: 'Ibuprofeno', tipoMedicamento: 'Anti-inflamatório', receitaMedicamento: 'Ibuprofeno' },

]
