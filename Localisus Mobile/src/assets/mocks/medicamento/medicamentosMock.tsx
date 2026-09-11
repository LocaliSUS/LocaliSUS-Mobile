import { TipoMedicamento } from "../tipoMedicamento/tipoMedicamento";

export type Medicamento = {
    id: string;
    nomeComum: string;
    nomeTecnico?: string; 
    tipoMedicamento: TipoMedicamento;
    receitaMedicamento?: string;
}

export const mockMedicamentos = [
    { id: '1', nomeComum: 'Dipirona', nomeTecnico: 'Metamizol', tipoMedicamento: 'Analgesico', receitaMedicamento: 'Dipirona Monoidratada' },
    { id: '2', nomeComum: 'Amoxicilina', nomeTecnico: 'Amoxicilina', tipoMedicamento: 'Antibiotico', receitaMedicamento: 'Amoxicilina Tri-hidratada' },
    { id: '3', nomeComum: 'Captopril', nomeTecnico: 'Captopril', tipoMedicamento: 'Anti-hipertensivo', receitaMedicamento: 'Captopril' },
    { id: '4', nomeComum: 'Ibuprofeno', nomeTecnico: 'Ibuprofeno', tipoMedicamento: 'Anti-inflamatório', receitaMedicamento: 'Ibuprofeno' },
] satisfies Medicamento[];

// o satisfies permite que o "modelo" de medicação seja aceito pelo programa, permitindo assim que não haja um erro no momento de busca, pois o array é validado e matém a restrição dos tipos de medicamentos