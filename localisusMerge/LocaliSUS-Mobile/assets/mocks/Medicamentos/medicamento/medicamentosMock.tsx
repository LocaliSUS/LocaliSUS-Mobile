export interface Medicamento {
    id: string;
    nomeComum: string;
    nomeTecnico?: string;
    tipoMedicamento: string;
    
}

export const mockMedicamentos = [
    { id: '1', nomeComum: 'Dipirona', nomeTecnico: 'Metamizol', tipoMedicamento: 'Analgesico', receitaMedicamento: 'Dipirona Monoidratada' },
    { id: '2', nomeComum: 'Amoxicilina', nomeTecnico: 'Amoxicilina', tipoMedicamento: 'Antibiotico', receitaMedicamento: 'Amoixicilina Tri-hidratada' },
    { id: '3', nomeComum: 'Catopril', nomeTecnico: 'Catopril', tipoMedicamento: 'Aniti-hipertensivo', receitaMedicamento: 'Ibuprofeno' },
    { id: '4', nomeComum: 'Ibuprofeno', nomeTecnico: 'Ibuprofeno', tipoMedicamento: 'Anti-inflamatório', receitaMedicamento: 'Ibuprofeno' },

]
//precisa ser implementada a tipagem para trazer robustez aos dados que forem pertencer a esse mock futuramente, tipo amanhã
//implementar também a dosagem dos medicamentos de forma personalizada, mas que vai fazer isso futuramente (muito futuramente) é o médico
//também atribuir isso ao usuário


//os elementos mocados aqui são representados para a nossa barra de pesquisa dos medicamentos