import { useState } from "react";
import { login } from "@/services/auth/authService";

const loginViewModel = () => {
  const [values, setValues] = useState({
    cpf: "",
    senha: "",
  });

  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });
  };

  const entrar = async () => {
    setErro(null);

    if (!values.cpf || !values.senha) {
      setErro("Preencha CPF e senha.");
      return false;
    }

    setCarregando(true);
    try {
      await login({ cpf: values.cpf, senha: values.senha });
      return true;
    } catch (err: any) {
      const status = err.response?.status;
      if (status === 401) {
        setErro("CPF ou senha inválidos.");
      } else {
        setErro(err.response?.data?.message ?? "Erro ao entrar. Tente novamente.");
      }
      return false;
    } finally {
      setCarregando(false);
    }
  };

  return {
    ...values,
    onChange,
    entrar,
    carregando,
    erro,
  };
};

export default loginViewModel;