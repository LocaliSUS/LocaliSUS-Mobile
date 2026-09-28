import React from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';
import { corPorStatus } from './mapaUtilNative';

interface Props {
  status: string;
}

export const marcador: ViewStyle = {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#fff',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowOffset: {
    width: 0,
    height: 1,
  },
};

export const MarcadorHospital = ({ status }: Props) => {
  return (
    <View
      style={[marcador, { backgroundColor: corPorStatus(status) }]}
    />
  );
};