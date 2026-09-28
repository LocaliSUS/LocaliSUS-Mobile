namespace projetointegrador.API.Models
{
    public class Lembrete
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; } = null!;

        public int MedicamentoId { get; set; }

        public string NomeMedicamento;
        public Medicamento Medicamento { get; set; } = null!;

        public TimeSpan HorarioInicial { get; set; }

        public int IntervaloHoras { get; set; }

        public bool Ativo { get; set; }
    }
}
