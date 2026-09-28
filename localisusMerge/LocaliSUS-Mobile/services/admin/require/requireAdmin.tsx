import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getUsuario } from "@/services/auth/authService";

export default function useRequireAdmin() {
  const router = useRouter();

  const [verificando, setVerificando] = useState(true);
  const [autorizado, setAutorizado] = useState(false);

  useEffect(() => {
    const verificarUsuario = async () => {
      const usuario = await getUsuario();

      console.log("USUÁRIO LOGADO:", usuario);
      console.log("TIPO DO USUÁRIO:", usuario?.tipo);

      if ((await usuario).tipo === "Administrador") {
        setAutorizado(true);
      } else {
        router.replace("/");
      }

      setVerificando(false);
    };

    verificarUsuario();
  }, []);

  return {
    verificando,
    autorizado,
  };
}