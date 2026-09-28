
export interface Lembrete {
    id: number;
    usuarioId: number;
    medicamentoId?: number;
    nomeMedicamento?: {
        idMedicamento: number;
        nomeMedicamento: string;
        dosagem: number;
        quantidade: number;
    };
    tipoMedicamento?: string;
    horarioInicial: number;
    intervaloHoras: number;
    ativo: boolean;
}


export interface CriarLembretePayload {
  //medicamentoId: number;
  nomeMedicamento: string;
  horarioInicial: string; 
  intervaloHoras: number;
}
 
export interface AtualizarLembretePayload {
  medicamentoId: number;
  nomeMedicamento: string;
  horarioInicial: string;
  intervaloHoras: number;
  ativo: boolean;
}
 
