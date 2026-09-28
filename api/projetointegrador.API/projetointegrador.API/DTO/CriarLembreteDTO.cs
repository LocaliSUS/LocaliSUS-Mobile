namespace projetointegrador.API.DTO
{
    public class CriarLembreteDTO
    {
        public int UsuarioId { get; set; }

        public int MedicamentoId { get; set; }

        public string NomeMedicamento { get; set; }

        public TimeSpan HorarioInicial { get; set; }

        public int IntervaloHoras { get; set; }
    }
}
