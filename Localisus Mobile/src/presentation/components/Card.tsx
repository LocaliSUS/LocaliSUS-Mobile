import React, { ReactNode } from "react";

export interface CardProps {
    id: number,
    titulo: string,
    descricao: string,
    cor?: string,
    children?: ReactNode
}

const elementosCard: CardProps[] = [
    { id: 1, titulo: "Descarte impróprio de remédios", descricao: "Aprenda a descartar corretamente seus medicamentos os levando a unidade de saúde próxima", cor:"#12d393"},
    { id: 2, titulo: "Verifique a validade dos medicamentos", descricao: "Antes de usar, confira sempre a data de validade e descarte seus medicamentos vencidos de forma segura", cor:"#1286d3ff"},
    { id: 3, titulo: "Remova rótulos e dados pessoais", descricao: "Antes de descartar, retire rótulos com seus dados pessoais das embalagens para proteger a sua privacidade", cor:"#e6d010ff"},
    { id: 4, titulo: "Mantenha fora do alcance de crianças", descricao: "Guarde os medicamentos em locais seguros e altos, longe do alcance de crianças e animais de estimação.", cor:"#9612d3ff"},
    { id: 4, titulo: "Contribua para o meio ambiente", descricao: "O descarte correto evita a contaminação do solo e da água, protegendo o meio ambiente e a saúde da comunidade.", cor:"#12d3d3ff"}
]

export function ComponenteCard({
    titulo,
    descricao,
    children
}: CardProps) {
    return(
        <div>
            <h1>{titulo}</h1>
        </div>
    )
}