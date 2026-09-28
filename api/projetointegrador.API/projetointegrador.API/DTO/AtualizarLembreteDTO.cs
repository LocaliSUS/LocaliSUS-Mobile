using projetointegrador.API.Models;

namespace projetointegrador.API.DTO
{
    public class AtualizarLembreteDTO
    {
        public int UsuarioId { get; set; }

        public int MedicamentoId { get; set; }

        public Medicamento NomeMedicamento { get; set; }

        public TimeSpan HorarioInicial { get; set; }

        public int IntervaloHoras { get; set; }

        public bool Ativo {  get; set; }
    }
}
