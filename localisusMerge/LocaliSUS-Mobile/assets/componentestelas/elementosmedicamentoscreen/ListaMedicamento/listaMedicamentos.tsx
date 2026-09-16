import { useState } from "react";
import { FlatList } from "react-native";
import { LabelMedicamentoProps } from "@/assets/componentestelas/elementosmedicamentoscreen/LabelMedicamento/labelMedicamento";
import { CardMedicamento } from "../CardMedicamento/cardMedicamento";
import { FiltroCategorias } from "../FiltroCategoria/filtroCategoria";
import { styles } from "./listaMedicamentosTheme";

type ListaMedicamentosProps = {
    medicamentos: LabelMedicamentoProps[];
};

export const ListaMedicamentos = ({ medicamentos }: ListaMedicamentosProps) => {
    const [categoriaAtiva, setCategoriaAtiva] = useState<string | undefined>();
    const [dados, setDados] = useState(medicamentos);

    const listaFiltrada = categoriaAtiva
        ? dados.filter((m) => m.categoria === categoriaAtiva)
        : dados;

    const toggleFavorito = (nome: string) => {
        setDados((prev) =>
            prev.map((m) => (m.nomeRemedio === nome ? { ...m, favoritado: !m.favoritado } : m))
        );
    };

    return (
        <>
            <FiltroCategorias categoriaSelecionada={categoriaAtiva} onSelecionar={setCategoriaAtiva} />
            <FlatList
                data={listaFiltrada}
                keyExtractor={(item) => item.nomeRemedio}
                contentContainerStyle={styles.listaContainer}
                renderItem={({ item }) => (
                    <CardMedicamento medicamento={item} onToggleFavorito={toggleFavorito} />
                )}
            />
        </>
    );
};