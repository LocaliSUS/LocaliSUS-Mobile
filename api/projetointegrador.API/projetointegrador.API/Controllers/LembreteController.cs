
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using projetointegrador.API.Data;
using projetointegrador.API.DTO;
using projetointegrador.API.Models;

namespace projetointegrador.API.Controllers
{
    [ApiController]
    [Route("api/lembretes")]
    [Authorize]
    public class LembretesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LembretesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetLembretes()
        {
            var usuarioId = ObterUsuarioId();

            if (usuarioId == null)
                return Unauthorized();

            var lembretes = await _context.Lembretes
                .Include(l => l.Medicamento)
                .Where(l => l.UsuarioId == usuarioId.Value)
                .ToListAsync();

            return Ok(lembretes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLembreteById(int id)
        {
            var usuarioId = ObterUsuarioId();

            if (usuarioId == null)
                return Unauthorized();

            var lembrete = await _context.Lembretes
                .Include(l => l.Medicamento)
                .FirstOrDefaultAsync(l =>
                    l.Id == id &&
                    l.UsuarioId == usuarioId.Value
                );

            if (lembrete == null)
                return NotFound(new
                {
                    message = "Lembrete não encontrado."
                });

            return Ok(lembrete);
        }

        [HttpPost("CriarLembrete")]
        public async Task<IActionResult> CriarLembrete(
            [FromBody] CriarLembreteDTO dados)
        {
            var usuarioId = ObterUsuarioId();

            if (usuarioId == null)
                return Unauthorized();

            var medicamento = await _context.Medicamentos
                .FindAsync(dados.MedicamentoId);

            if (medicamento == null)
                return NotFound(new
                {
                    message = "Medicamento não encontrado."
                });

            var lembrete = new Lembrete
            {
                UsuarioId = usuarioId.Value,
                NomeMedicamento = dados.NomeMedicamento ,
                MedicamentoId = dados.MedicamentoId,
                HorarioInicial = dados.HorarioInicial,
                IntervaloHoras = dados.IntervaloHoras,
                Ativo = true
            };

            _context.Lembretes.Add(lembrete);

            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetLembreteById),
                new { id = lembrete.Id },
                lembrete
            );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarLembrete(
            int id,
            [FromBody] AtualizarLembreteDTO dados)
        {
            var usuarioId = ObterUsuarioId();

            if (usuarioId == null)
                return Unauthorized();

            var lembrete = await _context.Lembretes
                .FirstOrDefaultAsync(l =>
                    l.Id == id &&
                    l.UsuarioId == usuarioId.Value
                );

            if (lembrete == null)
                return NotFound(new
                {
                    message = "Lembrete não encontrado."
                });

            var medicamento = await _context.Medicamentos
                .FindAsync(dados.MedicamentoId);

            if (medicamento == null)
                return NotFound(new
                {
                    message = "Medicamento não encontrado."
                });

            lembrete.MedicamentoId = dados.MedicamentoId;
            lembrete.HorarioInicial = dados.HorarioInicial;
            lembrete.IntervaloHoras = dados.IntervaloHoras;
            lembrete.Ativo = dados.Ativo;

            await _context.SaveChangesAsync();

            return Ok(lembrete);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ExcluirLembrete(int id)
        {
            var usuarioId = ObterUsuarioId();

            if (usuarioId == null)
                return Unauthorized();

            var lembrete = await _context.Lembretes
                .FirstOrDefaultAsync(l =>
                    l.Id == id &&
                    l.UsuarioId == usuarioId.Value
                );

            if (lembrete == null)
                return NotFound(new
                {
                    message = "Lembrete não encontrado."
                });

            _context.Lembretes.Remove(lembrete);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        private int? ObterUsuarioId()
        {
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);

            if (claim == null)
                return null;

            if (!int.TryParse(claim.Value, out var usuarioId))
                return null;

            return usuarioId;
        }
    }
}

