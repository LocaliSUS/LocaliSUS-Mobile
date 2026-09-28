// ameGeraldo.tsx
import { InfoHospitalScreen } from "@/presentation/components/InfoHospital";
import ameGeraldo1 from "@/assets/img/amegeraldo1.jpg";
import ameGeraldo2 from "@/assets/img/amegeraldo2.jpg";

const AmeGeraldoInfoScreen = () => (
  <InfoHospitalScreen
    nomeHospital="AME Geraldo de Campos Mota"
    descricao="Ambulatório Médico de Especialidades com atendimento especializado."
    imagens={[ameGeraldo1, ameGeraldo2] }hospitalId={2}
  />
);

export default AmeGeraldoInfoScreen;