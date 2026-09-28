export type TipoUsuario = 'Cidadao' | 'Funcionario' | 'Administrador'; 
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  tipoUsuario: TipoUsuario;
  hospitalId?: number | null;
}

export interface CriarUsuarioPayload {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  tipoUsuario: TipoUsuario;
  hospitalId?: number | null;
}