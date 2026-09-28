// VilaRomanaInfoScreen.tsx
import { InfoHospitalScreen } from "@/presentation/components/InfoHospital";
import vilaromana1 from "@/assets/img/vlromana.jpg";
import vilaromana2 from "@/assets/img/vlromana2.jpg";

const VilaRomanaInfoScreen = () => (
  <InfoHospitalScreen
        nomeHospital="UBS Vila Romana"
        descricao="Unidade Básica de Saúde que atende a região da Vila Romana."
        imagens={[vilaromana1, vilaromana2]} hospitalId={1}  />
);

export default VilaRomanaInfoScreen;