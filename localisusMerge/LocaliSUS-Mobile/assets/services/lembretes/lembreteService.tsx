import { Lembrete } from "@/assets/componentestelas/elementoslembretescreen/LabelLembrete/labelLembrete";
import { mockLembretes } from "@/assets/mocks/Lembretes/lembretesMock";

export const lembreteService = {
    listarMedicamentos(): Lembrete[] {
        return mockLembretes;
    },

    criarLembrete(novoLembrete: Lembrete): Lembrete{
        mockLembretes.push(novoLembrete)
        return novoLembrete;
    },

    deletar(id: number): boolean{
        const index = mockLembretes.findIndex((lembrete) => lembrete.id === id);
        
        if(index === -1) {
            return false;
        }

        mockLembretes.splice(index, 1);
        return true;
    }
}