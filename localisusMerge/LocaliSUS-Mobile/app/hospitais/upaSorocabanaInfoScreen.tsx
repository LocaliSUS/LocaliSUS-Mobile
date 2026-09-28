import { InfoHospitalScreen } from "@/presentation/components/InfoHospital";
import upaSorocabana1 from "@/assets/img/upasorocabana1.jpg";
import upaSorocabana2 from "@/assets/img/upasorocabana2.jpg";

const UpaSorocabanaInfoScreen = () => (
  <InfoHospitalScreen
    nomeHospital="UPA Sorocabana"
    descricao="Unidade de Pronto Atendimento com atendimento 24h."
    imagens={[upaSorocabana1, upaSorocabana2]}
    hospitalId={3}
  />
);

export default UpaSorocabanaInfoScreen;