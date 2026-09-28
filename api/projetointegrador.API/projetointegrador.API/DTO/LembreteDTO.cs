namespace projetointegrador.API.DTO
{
    public class LembreteDTO
    {
        public int Id { get; set; }

        public int MedicamentoId { get; set; }

        public string NomeMedicamento { get; set; } = string.Empty;

        public TimeSpan HorarioInicial { get; set; }

        public int IntervaloHoras { get; set; }

        public bool Ativo { get; set; }
    }
}
