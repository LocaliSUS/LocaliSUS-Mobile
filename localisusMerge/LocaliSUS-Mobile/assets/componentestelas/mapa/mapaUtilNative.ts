export const corPorStatus = (status: string): string => {
  const statusNormalizado = status.toUpperCase();

  switch (statusNormalizado) {
    case 'CRITICO':
      return '#ff5252';

    case 'INDISPONIVEL':
      return '#9e9e9e';

    case 'DISPONIVEL':
      return '#2ecc71';

    default:
      return '#2ecc71';
  }
};