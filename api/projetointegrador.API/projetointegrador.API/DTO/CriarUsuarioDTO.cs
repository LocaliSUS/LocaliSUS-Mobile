using System.ComponentModel.DataAnnotations;
using projetointegrador.API.Enum;

namespace projetointegrador.API.DTO
{
    public class CriarUsuarioDTO
    {
        [Required(ErrorMessage = "O nome é obrigatório.")]
        [StringLength(100, ErrorMessage = "O nome deve conter no máximo 100 caracteres.")]
        public string Nome { get; set; } = string.Empty;

        [Required(ErrorMessage = "O email é obrigatório.")]
        [EmailAddress(ErrorMessage = "O email informado não é válido.")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "O CPF é obrigatório.")]
        [StringLength(14, ErrorMessage = "O CPF deve conter 14 caracteres.")]
        [RegularExpression(
            @"^\d{3}\.\d{3}\.\d{3}-\d{2}$",
            ErrorMessage = "O CPF deve estar no formato XXX.XXX.XXX-XX."
        )]
        public string CPF { get; set; } = string.Empty;

        public int? HospitalId { get; set; }

        [Required(ErrorMessage = "O tipo de usuário é obrigatório.")]
        public TipoUsuario? TipoUsuario { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória.")]
        [MinLength(8, ErrorMessage = "A senha deve possuir no mínimo 8 caracteres.")]
        public string Senha { get; set; } = string.Empty;
    }
}