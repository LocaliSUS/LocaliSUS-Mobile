import React, { useState } from "react";
import { criarUsuario } from "@/services/cadastro/cadastroUsuarioService";

const cadastroViewModel = () => {
  const [values, setValues] = useState({
    userNome: "",
    userEmail: "",
    userCPF: "",
    userPassword: "",
  });

  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });
  };

  const cadastrar = async () => {
    setErro(null);

    if (!values.userNome || !values.userEmail || !values.userCPF || !values.userPassword) {
      setErro("Preencha todos os campos.");
      return false;
    }

    setCarregando(true);
    try {
      await criarUsuario({
        nome: values.userNome,
        email: values.userEmail,
        cpf: values.userCPF,
        senha: values.userPassword,
        tipoUsuario: "Cidadao", 
        hospitalId: null,
      });
      return true;
    } catch (err: any) {
      setErro(err.response?.data?.Mensagem ?? "Erro ao cadastrar. Tente novamente.");
      return false;
    } finally {
      setCarregando(false);
    }
  };

  return {
    ...values,
    onChange,
    cadastrar,
    carregando,
    erro,
  };
};

export default cadastroViewModel;