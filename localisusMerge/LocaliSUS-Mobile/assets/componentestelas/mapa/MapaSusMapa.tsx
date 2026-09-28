import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { HospitalSus } from '@/services/hospitais/types';
import { corPorStatus } from './mapaUtilNative';
import { criarHospitalRepository } from '@/services/hospitais/hospitalRepositoryFactory';

interface MapaSusMapaProps {
  onHospitalPress?: (hospital: HospitalSus) => void;
  medicamento?: string;   // se vier, colore os hospitais pelo estoque desse remédio
  refreshKey?: number;    // muda para forçar recarregar (útil nos testes)
}

const REGIAO_INICIAL = {
  latitude: -23.5330,
  longitude: -46.6550,
};

const gerarMarcadores = (hospitais: HospitalSus[]) => {
  return hospitais
    .map((h) => {
      const cor = corPorStatus(h.status);
      return `
        L.marker([${h.latitude}, ${h.longitude}], {
          icon: L.divIcon({
            className: '',
            html: '<div style="width:20px;height:20px;border-radius:50px;border:2px solid #fff;box-shadow:0 1px 2px rgba(0,0,0,0.3);background-color:${cor};"></div>',
            iconSize: [20, 20],
          })
        })
          .addTo(map)
          .bindPopup(${JSON.stringify(`<b>${h.nome}</b><br>${h.endereco}`)})
          .on('click', () => {
            window.ReactNativeWebView.postMessage(JSON.stringify(${JSON.stringify(h)}));
          });
      `;
    })
    .join('\n');
};

export const MapaSusMapa = ({ onHospitalPress, medicamento, refreshKey }: MapaSusMapaProps) => {
  const [hospitais, setHospitais] = useState<HospitalSus[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    setCarregando(true);

    criarHospitalRepository()
      .listarTodos(medicamento)
      .then((hs) => ativo && setHospitais(hs))
      .catch((err) => console.warn('Erro ao carregar hospitais:', err))
      .finally(() => ativo && setCarregando(false));

    return () => {
      ativo = false;
    };
  }, [medicamento, refreshKey]);

  const handleMessage = (event: WebViewMessageEvent) => {
    try {
      const hospital: HospitalSus = JSON.parse(event.nativeEvent.data);
      onHospitalPress?.(hospital);
    } catch (err) {
      console.warn('Erro ao processar clique no marcador:', err);
    }
  };

  if (carregando) return null;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <style>html, body, #map { height: 100%; margin: 0; padding: 0; }</style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <script>
          const map = L.map('map').setView([${REGIAO_INICIAL.latitude}, ${REGIAO_INICIAL.longitude}], 13);
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19,
          }).addTo(map);
          ${gerarMarcadores(hospitais)}
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      key={JSON.stringify(hospitais.map((h) => h.status))}
      originWhitelist={['*']}
      source={{ html }}
      style={styles.webview}
      javaScriptEnabled
      domStorageEnabled
      mixedContentMode="always"
      onMessage={handleMessage}
    />
  );
};

const styles = StyleSheet.create({
  webview: { flex: 1 },
});