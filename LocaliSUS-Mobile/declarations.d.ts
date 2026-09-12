// arquivo que declara os tipos de arquivos de imagem para 
// que o TypeScript possa reconhecê-los corretamente

declare module '*.jpg' {
  const source: number;
  export default source;
}

declare module '*.png' {
  const source: number;
  export default source;
}