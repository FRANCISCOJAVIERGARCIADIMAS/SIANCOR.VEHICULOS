export interface Unidad {
  noEconomico: string;
  marca: string;
  modelo: string;
  tipo: string;
  noSerie: string;
  placas: string;
  documentos: Documentos;
}

export interface Documentos {
  placasdeCirculacion: boolean;
  tarjetadeCirculacion: boolean;
  polizadeSeguro: boolean;
  verificacionVehicular: string;
  tenencia: boolean;
  engomado: boolean;
}
